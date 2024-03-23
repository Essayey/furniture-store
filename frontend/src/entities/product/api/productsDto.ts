import { Property } from "@/entities/property";
import { Product } from "../model/types";

export type AllProductsDtoResponse = Product[];
export type AllProductsDtoRequest = void;

export type ProductByIdDtoResponse = Product;
export type ProductByIdDtoRequest = { id: string };

export type CreateProductDtoResponse = Product;
export type CreateProductDtoRequest = Product;

export type PathProductByIdDtoResponse = Product;
export type PathProductByIdDtoRequest = Partial<
  Pick<Product, "name" | "description" | "amount" | "price">
> & {
  id: string;
};

export type DeleteProductByIdDtoResponse = void;
export type DeleteProductByIdDtoRequest = { id: string };

export type UpdateProductPropertyDtoResponse = {
  id: number;
  value: string;
  productId: string;
  product: Product;
  propertyId: number;
  property: Property;
};
export type UpdateProductPropertyDtoRequest = {
  productId: number;
  propertyId: number;
  value: string;
};
