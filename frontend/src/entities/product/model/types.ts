import { Property } from "@/entities/property";

export type Product = {
  name: string;
  description: string;
  img: string;
  categoryId: number;
  properties: Property[];
  amount: number;
  price: number;
};
