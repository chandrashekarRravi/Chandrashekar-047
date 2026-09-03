import type { VercelRequest, VercelResponse } from '@vercel/node';

const PLACES_API_BASE = 'https://places.googleapis.com/v1';

/**
 * GET /api/reviews
 * Fetches Google Place reviews for CSR Forge using the Places API (New).
 * Requires:
 *   GOOGLE_PLACES_API_KEY — env var in Vercel dashboard
 *   GOOGLE_PLACE_ID       — env var in Vercel dashboard (e.g. ChIJxxxxxx)
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('[reviews] Missing env vars GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  try {
    const url = `${PLACES_API_BASE}/places/${placeId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[reviews] Google Places API error:', response.status, text);
      return res.status(502).json({ error: 'Failed to fetch from Google', detail: text });
    }

    const data = await response.json();

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=300');
    res.setHeader('Access-Control-Allow-Origin', '*');

    return res.status(200).json({
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? []).map((r: any) => ({
        authorName: r.authorAttribution?.displayName ?? 'Anonymous',
        authorPhoto: r.authorAttribution?.photoUri ?? null,
        authorUri: r.authorAttribution?.uri ?? null,
        rating: r.rating ?? 5,
        text: r.text?.text ?? '',
        relativePublishTimeDescription: r.relativePublishTimeDescription ?? '',
      })),
    });
  } catch (err: any) {
    console.error('[reviews] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
