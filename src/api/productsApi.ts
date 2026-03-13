// import axios from 'axios';
// import type { ProductsApiResponse, ProductsQueryParams, Product } from '../types';  // ← додай type тут!

// const API_BASE_URL = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1';

// export const fetchProducts = async (params: ProductsQueryParams = {}): Promise<Product[]> => {
//   try {
//     const response = await axios.get<ProductsApiResponse>('/products', {
//       baseURL: API_BASE_URL,
//       params,
//     });

//     if (!response.data.success) {
//       throw new Error('API returned unsuccessful response');
//     }

//     return response.data.data.products;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };
import axios from 'axios';
import type { ProductsApiResponse, Product } from '../types';

const API_BASE_URL = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1';

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<ProductsApiResponse>('/products', {
    baseURL: API_BASE_URL,
  });

  if (!response.data.success) {
    throw new Error('API повернув помилку');
  }

  return response.data.data.products;
};