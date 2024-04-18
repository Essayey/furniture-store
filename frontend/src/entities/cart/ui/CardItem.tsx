import { useProductByIdQuery } from "@/entities/product";
import { Button, Input } from "@/shared/ui";
import { Delete, Heart } from "lucide-react";
import { useChangeCartProductQuantityMutation } from "../api/api";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "@/entities/user";

type CardItemProps = {
  productId: number;
  onDeleteClick?: () => void;
  onLikeClick?: () => void;
  quantity: number;
};
export const CardItem = (props: CardItemProps) => {
  const { onDeleteClick, onLikeClick, productId, quantity } = props;
  const { data: product } = useProductByIdQuery({ id: productId });
  const user = useSelector(selectUserAuthData);
  const [changeCartProductQuantity] = useChangeCartProductQuantityMutation();
  const incrementProductQuantity = () => {
    changeCartProductQuantity({
      productId: productId,
      quantity: quantity + 1,
      userId: user?.id,
    });
  };
  const decrementProductQuantity = () => {
    changeCartProductQuantity({
      productId: productId,
      quantity: quantity - 1,
      userId: user?.id,
    });
  };
  return (
    <div className="grid grid-cols-4   gap-6 w-[30%]">
      <img
        className="rounded-xl"
        width={250}
        height={250}
        src={`http://localhost:7000/${product?.img}`}
        alt={`product ${product?.name}`}
      />

      <div className="flex flex-col mt-4 justify-between">
        <div>{product?.name}</div>
        <div className="flex gap-4">
          <Delete onClick={onDeleteClick} />
          <Heart onClick={onLikeClick} />
        </div>
      </div>
      <div className="mt-4">{product?.price} Р</div>
      <div className="grid mt-4 grid-cols-[1fr,50px,1fr] gap-4">
        <Button onClick={decrementProductQuantity} className="rounded-l-xl">
          -
        </Button>
        <Input value={quantity} className="" />
        <Button onClick={incrementProductQuantity} className="rounded-r-xl">
          +
        </Button>
      </div>
    </div>
  );
};
