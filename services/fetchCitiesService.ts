import api from '~/libs/api';
import { City } from '~/types/City';

export const fetchCitiesService = async (): Promise<City[]> => {
  try {
    const response = await api.get<City[]>('/products/cities'); // Substitua pelo endpoint real da API de cidades
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch cities: ${error}`);
  }
};
