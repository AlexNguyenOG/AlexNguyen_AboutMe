"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import {
  ARKANSAS,
  milesBetween,
  type Status,
} from "@/components/GlobeMap";
import { getPlaceName } from "@/lib/reverseGeocode";
import { getTimezone } from "@/lib/timezone";

const GlobeMap = dynamic(
  () => import("@/components/GlobeMap").then((mod) => mod.GlobeMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-72 w-full max-w-2xl items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-zinc-400">
        Loading 3D map...
      </div>
    ),
  },
);

function requestLocation(
  onSuccess: (
    coords: { lat: number; lng: number },
    miles: number,
    placeName: string | null,
    timeZone: string | null,
  ) => void,
  onError: () => void,
) {
  if (!navigator.geolocation) {
    onError();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const distance = Math.round(milesBetween(coords, ARKANSAS));
      const [placeName, timeZone] = await Promise.all([
        getPlaceName(coords.lat, coords.lng),
        getTimezone(coords.lat, coords.lng),
      ]);
      onSuccess(coords, distance, placeName, timeZone);
    },
    onError,
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 },
  );
}

export function LocationSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [miles, setMiles] = useState<number | null>(null);
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [visitorTimeZone, setVisitorTimeZone] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const locate = useCallback(() => {
    setStatus("loading");

    requestLocation(
      (coords, distance, city, timeZone) => {
        setUserLocation(coords);
        setMiles(distance);
        setPlaceName(city);
        setVisitorTimeZone(timeZone);
        setStatus("ready");
      },
      () => {
        setStatus("unavailable");
      },
    );
  }, []);

  return (
    <GlobeMap
      status={status}
      miles={miles}
      placeName={placeName}
      visitorTimeZone={visitorTimeZone}
      userLocation={userLocation}
      onLocate={locate}
    />
  );
}
