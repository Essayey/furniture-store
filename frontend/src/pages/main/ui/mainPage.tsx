import { ProductCard, useAllProductsQuery } from "@/entities/product";
import { memo } from "react";

export const MainPage = memo(() => {
  const { data: products, isLoading } = useAllProductsQuery()

  if (isLoading) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map(product =>
        <ProductCard
          description={product.description}
          img={`http://localhost:7000/${product.img}`}
          name={product.name}
          price={String(product.price)}
          onAddToCart={() => { }}
        />)}
    </div>
  );
});
