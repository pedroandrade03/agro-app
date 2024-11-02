import api from '~/libs/api';
import { Ad } from '~/types/Ad';

export const fetchAdsService = async (): Promise<Ad[]> => {
  try {
    const response = await api.get<Ad[]>('/products/'); // Endpoint específico para obter os anúncios
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch ads: ${error}`);
  }
};
