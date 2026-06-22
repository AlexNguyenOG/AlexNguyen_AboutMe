const ARKANSAS_TIMEZONE = "America/Chicago";

export function formatTimeInZone(
  timeZone: string,
  withSeconds = false,
): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    ...(withSeconds ? { second: "2-digit" } : {}),
    timeZoneName: "short",
  }).format(new Date());
}

export async function getTimezone(
  lat: number,
  lng: number,
): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lng),
    });

    const response = await fetch(
      `https://api.bigdatacloud.net/data/timezone-by-location?${params.toString()}`,
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      timezone?: { ianaName?: string };
    };

    return data.timezone?.ianaName ?? null;
  } catch {
    return null;
  }
}

export { ARKANSAS_TIMEZONE };
