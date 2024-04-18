import { Button } from "@/shared/ui";

type ProductCardProps = {
  img: string;
  name: string;
  description: string;
  price: string;
  onAddToCart?: () => void; // Функция для обработки добавления в корзину
};

export const ProductCard = (props: ProductCardProps) => {
  const { img, name, description, price, onAddToCart } = props;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-64 overflow-hidden" src={img} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-between mt-3">
          <p className="text-gray-700 text-base mt-2">{price} ₽</p>
          {onAddToCart && (
            <Button onClick={onAddToCart} variant={"secondary"}>
              Добавить в корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
