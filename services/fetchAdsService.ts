import { Ad } from '~/types/Ad';

export const fetchAdsService = async (): Promise<Ad[]> => {
  // Substitua pela URL da sua API real
  const response = await fetch('http://localhost:8000/api/products/');
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to fetch ads');
  }
  return response.json();
};
