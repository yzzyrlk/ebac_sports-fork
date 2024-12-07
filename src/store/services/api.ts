import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/product';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products?category=${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = api;