import { useState, useEffect } from 'react';

export interface GoogleReview {
  authorName: string;
  authorPhoto: string | null;
  authorUri: string | null;
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
}

export interface GoogleReviewsData {
  rating: number | null;
  userRatingCount: number;
  reviews: GoogleReview[];
}

interface UseGoogleReviewsResult {
  data: GoogleReviewsData | null;
  loading: boolean;
  error: string | null;
}

export function useGoogleReviews(): UseGoogleReviewsResult {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchReviews() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/reviews');
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const json: GoogleReviewsData = await res.json();
        if (!cancelled) {
          setData(json);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message ?? 'Failed to load reviews');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchReviews();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}
