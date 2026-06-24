import { NextRequest, NextResponse } from "next/server";
import { parseCoordinates } from "@/lib/coordinates";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = rateLimit(`timezone:${ip}`, 20, 60_000);

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfter ?? 60) },
      },
    );
  }

  const { searchParams } = request.nextUrl;
  const coords = parseCoordinates(
    searchParams.get("lat"),
    searchParams.get("lng"),
  );

  if (!coords) {
    return NextResponse.json({ error: "Invalid coordinates" }, { status: 400 });
  }

  try {
    const params = new URLSearchParams({
      latitude: String(coords.lat),
      longitude: String(coords.lng),
    });

    const response = await fetch(
      `https://api.bigdatacloud.net/data/timezone-by-location?${params.toString()}`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Timezone service unavailable" },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      timezone?: { ianaName?: string };
    };

    return NextResponse.json(
      { timeZone: data.timezone?.ianaName ?? null },
      {
        headers: {
          "Cache-Control": "private, max-age=3600",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "Timezone request failed" },
      { status: 502 },
    );
  }
}
