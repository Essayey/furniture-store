import { Property } from "@/entities/property";

export type Category = {
  id: number;
  parentId: number | null;
  name: string;
  description: string;
  childCategories: Category[];
  createdAt: string;
  updatedAt: string;
  properties?: Property[];
};
