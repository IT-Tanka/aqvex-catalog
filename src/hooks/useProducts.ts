import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../api/productsApi';
import type { Product } from '../types';

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['allProducts'],
    queryFn: fetchAllProducts,
    staleTime: 10 * 60 * 1000, 
  });
};