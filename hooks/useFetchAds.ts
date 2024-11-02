import { useState, useEffect } from 'react';

import { fetchAdsService } from '~/services/fetchAdsService';
import { Ad } from '~/types/Ad';

interface UseFetchAdsResult {
  ads: Ad[];
  loading: boolean;
  error: string | null;
}

export const useFetchAds = (): UseFetchAdsResult => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await fetchAdsService();
        setAds(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return { ads, loading, error };
};
