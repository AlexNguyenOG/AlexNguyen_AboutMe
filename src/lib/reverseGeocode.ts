const CASUAL_PLACE_NAMES: Record<string, string> = {
  "San Francisco": "San Fran",
  "Los Angeles": "LA",
  "New York": "NYC",
  "New York City": "NYC",
};

function formatPlaceName(name: string): string {
  return CASUAL_PLACE_NAMES[name] ?? name;
}

export async function getPlaceName(
  lat: number,
  lng: number,
): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      lat: String(lat),
      lng: String(lng),
    });

    const response = await fetch(`/api/geocode?${params.toString()}`);

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { placeName?: string | null };
    return data.placeName ? formatPlaceName(data.placeName) : null;
  } catch {
    return null;
  }
}
