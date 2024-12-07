import { useGetProductsQuery } from '../store/services/api';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading products</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};