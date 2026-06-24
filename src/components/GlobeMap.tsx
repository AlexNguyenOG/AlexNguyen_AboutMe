"use client";

import { Line, OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import { TimezoneClocks } from "@/components/TimezoneClocks";
import { milesBetween } from "@/lib/distance";

const ARKANSAS = { lat: 34.7465, lng: -92.2896 };
const GLOBE_RADIUS = 2;

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function arcPoints(
  start: THREE.Vector3,
  end: THREE.Vector3,
  radius: number,
  segments = 80,
): THREE.Vector3[] {
  const startNorm = start.clone().normalize();
  const endNorm = end.clone().normalize();
  const points: THREE.Vector3[] = [];
  const omega = Math.acos(Math.min(1, Math.max(-1, startNorm.dot(endNorm))));

  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;

    if (omega < 0.0001) {
      points.push(startNorm.clone().multiplyScalar(radius * 1.04));
      continue;
    }

    const sinOmega = Math.sin(omega);
    const a = Math.sin((1 - t) * omega) / sinOmega;
    const b = Math.sin(t * omega) / sinOmega;

    points.push(
      startNorm
        .clone()
        .multiplyScalar(a)
        .add(endNorm.clone().multiplyScalar(b))
        .multiplyScalar(radius * 1.04),
    );
  }

  return points;
}

function Marker({
  position,
  color,
}: {
  position: THREE.Vector3;
  color: string;
}) {
  return (
    <group position={position}>
      <Sphere args={[0.055, 16, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.4}
        />
      </Sphere>
      <Sphere args={[0.1, 16, 16]}>
        <meshBasicMaterial color={color} transparent opacity={0.28} />
      </Sphere>
    </group>
  );
}

function EarthBody() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture(
    [
      "/textures/earth-day.jpg",
      "/textures/earth-normal.jpg",
      "/textures/earth-specular.jpg",
      "/textures/earth-clouds.png",
    ],
    (textures) => {
      textures[0].colorSpace = THREE.SRGBColorSpace;
      textures[3].colorSpace = THREE.SRGBColorSpace;
    },
  );

  const cloudsRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.018;
    }
  });

  return (
    <>
      <Sphere args={[GLOBE_RADIUS, 96, 96]}>
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={new THREE.Color("#5b8cff")}
          shininess={18}
        />
      </Sphere>

      <Sphere ref={cloudsRef} args={[GLOBE_RADIUS * 1.012, 96, 96]}>
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.38}
          depthWrite={false}
        />
      </Sphere>

      <Sphere args={[GLOBE_RADIUS * 1.06, 64, 64]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
    </>
  );
}

function GlobeScene({ userLocation }: { userLocation: { lat: number; lng: number } | null }) {
  const globeRef = useRef<Group>(null);

  const arkansasPoint = useMemo(
    () => latLngToVector3(ARKANSAS.lat, ARKANSAS.lng, GLOBE_RADIUS),
    [],
  );

  const userPoint = useMemo(() => {
    if (!userLocation) return null;
    return latLngToVector3(userLocation.lat, userLocation.lng, GLOBE_RADIUS);
  }, [userLocation]);

  const connectionArc = useMemo(() => {
    if (!userPoint) return null;
    return arcPoints(arkansasPoint, userPoint, GLOBE_RADIUS);
  }, [arkansasPoint, userPoint]);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[6, 2, 4]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-4, -1, -3]} intensity={0.35} color="#93c5fd" />

      <group ref={globeRef}>
        <Suspense fallback={null}>
          <EarthBody />
        </Suspense>

        <Marker position={arkansasPoint} color="#34d399" />
        {userPoint && <Marker position={userPoint} color="#f472b6" />}

        {connectionArc && (
          <Line
            points={connectionArc}
            color="#c4b5fd"
            lineWidth={1.5}
            transparent
            opacity={0.9}
          />
        )}
      </group>

      <OrbitControls
        enablePan={false}
        minDistance={3.2}
        maxDistance={6.5}
        autoRotate={!userLocation}
        autoRotateSpeed={0.45}
      />
    </>
  );
}

type Status = "idle" | "loading" | "ready" | "unavailable";

type GlobeMapProps = {
  status: Status;
  miles: number | null;
  placeName: string | null;
  visitorTimeZone: string | null;
  onLocate: () => void;
  userLocation: { lat: number; lng: number } | null;
};

export function GlobeMap({
  status,
  miles,
  placeName,
  visitorTimeZone,
  onLocate,
  userLocation,
}: GlobeMapProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-4">
      <div className="h-72 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#020617] shadow-[0_0_40px_rgba(56,189,248,0.12)] backdrop-blur-sm sm:h-80">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <color attach="background" args={["#020617"]} />
          <GlobeScene userLocation={userLocation} />
        </Canvas>
      </div>

      <p className="max-w-md text-lg font-light text-zinc-100/90">
        {status === "idle" && "I'm from Arkansas."}
        {status === "loading" && "I'm from Arkansas, finding where you are..."}
        {status === "ready" &&
          (placeName
            ? `You're in ${placeName}, about ${miles?.toLocaleString()} miles away from Arkansas where I live.`
            : `You're about ${miles?.toLocaleString()} miles away from Arkansas where I live.`)}
        {status === "unavailable" &&
          "I'm from Arkansas. Allow location access to see how far away you are."}
      </p>

      <TimezoneClocks
        visitorTimeZone={visitorTimeZone}
        visitorPlaceName={placeName}
        showVisitor={status === "ready"}
      />

      {(status === "idle" || status === "loading" || status === "unavailable") && (
        <button
          type="button"
          onClick={onLocate}
          disabled={status === "loading"}
          className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "loading" ? "Finding you..." : "Use my location"}
        </button>
      )}

      <p className="text-xs text-zinc-400">
        Green pin: Arkansas · Pink pin: you · Drag to explore the world
      </p>
      <p className="max-w-md text-xs text-zinc-500">
        Location stays in your browser until you allow it. Coordinates are only
        used to show distance and timezone, and are not saved.
      </p>
    </div>
  );
}

export { ARKANSAS, milesBetween };
export type { Status };
