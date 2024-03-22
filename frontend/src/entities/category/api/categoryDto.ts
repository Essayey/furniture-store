import { Category } from "../model/types";

export type allCategoriesDtoResponse = Category[];

export type categoriesByIdDtoResponse = Category;
export type categoriesByIdDtoRequest = { id: string };

// export type createCategoriesDtoResponse = {};
export type createCategoriesDtoRequest = {
  name: string;
  parentId: number;
  description: string;
};

export type pathCategoryByIdDtoResponse = Category;
export type pathCategoryByIdDtoRequest = {
  id: number;
  parentId?: number;
  name?: string;
  description?: string;
};
