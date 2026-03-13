import axios from 'axios';
import type { ProductsApiResponse, Product } from '../types';

const API_BASE_URL = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1';

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<ProductsApiResponse>('/products', {
    baseURL: API_BASE_URL,
  });

  if (!response.data.success) {
    throw new Error('API вернул ошибку');
  }

  return response.data.data.products;
};