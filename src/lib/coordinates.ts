export function parseCoordinates(
  lat: unknown,
  lng: unknown,
): { lat: number; lng: number } | null {
  const latitude =
    typeof lat === "string" ? Number(lat) : typeof lat === "number" ? lat : NaN;
  const longitude =
    typeof lng === "string" ? Number(lng) : typeof lng === "number" ? lng : NaN;

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return null;
  }

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return null;
  }

  return { lat: latitude, lng: longitude };
}
