import { useAddProductToCartMutation } from "@/entities/cart";
import { ProductCard, useAllProductsQuery } from "@/entities/product";
import { selectUserAuthData } from "@/entities/user";
import { useAppSelector } from "@/shared/hooks";
import { useSelector } from "react-redux";

export const CatalogPage = () => {
  const { data, isLoading } = useAllProductsQuery();
  const user = useSelector(selectUserAuthData);
  console.log(user);
  const [addToCart, {}] = useAddProductToCartMutation();
  if (isLoading) return null;

  return (
    <div className="grid grid-cols-4">
      {data?.map((product) => (
        <ProductCard
          {...product}
          onAddToCart={
            user?.id ? () => addToCart({ productId: product.id, userId: user?.id }) : undefined
          }
          img={`http://localhost:7000/${product.img}`}
        />
      ))}
    </div>
  );
};
