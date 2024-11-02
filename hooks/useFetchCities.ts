import { useState, useEffect } from 'react';

import { fetchCitiesService } from '~/services/fetchCitiesService';
import { City } from '~/types/City';

interface UseFetchCitiesResult {
  cities: City[];
  loading: boolean;
  error: string | null;
}

export const useFetchCities = (): UseFetchCitiesResult => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await fetchCitiesService();
        setCities(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { cities, loading, error };
};
