import { CardItem, useGetCartByUserIdQuery } from "@/entities/cart";
import { selectUserAuthData } from "@/entities/user";
import { useSelector } from "react-redux";

export const CartPage = () => {
  const user = useSelector(selectUserAuthData);
  const { data: cartItems } = useGetCartByUserIdQuery({ userId: user?.id });

  return (
    <div>
      {cartItems?.map((cartItem) => (
        <CardItem quantity={cartItem.quantity} productId={cartItem.productId} />
      ))}
    </div>
  );
};
