export interface Volume {
  id: string;
  label: string;
  in_stock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  old_price?: number;
  discount_percent?: number;
  currency: string;
  rating: number;
  reviews_count: number;
  in_stock: boolean;
  category: string;
  volumes: Volume[];
  selected_volume_id: string;
}

export interface ProductsApiResponse {
  success: boolean;
  data: {
    products: Product[];
    // якщо API повертає total / pages / etc — додайте сюди
  };
}

export type SortOption = 'price_asc' | 'price_desc' | 'rating_desc' | 'name_asc';

export interface ProductsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: SortOption;
}