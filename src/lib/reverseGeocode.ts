type ReverseGeocodeResponse = {
  city?: string;
  locality?: string;
  principalSubdivision?: string;
  countryName?: string;
};

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
      latitude: String(lat),
      longitude: String(lng),
      localityLanguage: "en",
    });

    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?${params.toString()}`,
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as ReverseGeocodeResponse;
    const rawName =
      data.city ||
      data.locality ||
      data.principalSubdivision ||
      data.countryName;

    return rawName ? formatPlaceName(rawName) : null;
  } catch {
    return null;
  }
}
