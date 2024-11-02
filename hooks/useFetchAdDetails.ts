import { useState, useEffect } from 'react';

import { fetchAdDetailsService } from '~/services/fetchAdDetailsService';
import { AdDetails } from '~/types/AdDetails';

interface UseFetchAdDetailsResult {
  adDetails: AdDetails | null;
  loading: boolean;
  error: string | null;
}

export const useFetchAdDetails = (id: number): UseFetchAdDetailsResult => {
  const [adDetails, setAdDetails] = useState<AdDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdDetails = async () => {
      try {
        const data = await fetchAdDetailsService(id);
        setAdDetails(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdDetails();
  }, [id]);

  return { adDetails, loading, error };
};
