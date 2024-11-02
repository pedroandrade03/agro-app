import api from '~/libs/api';
import { AdDetails } from '~/types/AdDetails';

export const fetchAdDetailsService = async (id: number): Promise<AdDetails> => {
  try {
    const response = await api.get<AdDetails>(`/products/${id}`); // Endpoint específico para obter detalhes do anúncio
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch ad details: ${error}`);
  }
};
