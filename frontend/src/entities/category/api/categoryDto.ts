import { Category } from "../model/types";

export type AllCategoriesDtoRequset = void;
export type AllCategoriesDtoResponse = Category[];

export type CategoriesByIdDtoResponse = Category;
export type CategoriesByIdDtoRequest = { id: string };

export type CreateCategoriesDtoResponse = Category;
export type CreateCategoriesDtoRequest = {
  name: string;
  parentId: number;
  description: string;
};

export type PathCategoryByIdDtoResponse = Category;
export type PathCategoryByIdDtoRequest = {
  id: number;
  parentId?: number;
  name?: string;
  description?: string;
};

export type DeleteCategoryByIdDtoResponse = void;
export type DeleteCategoryByIdDtoRequest = { id: string };

export type AddPropertyToCategoryDtoResponse = void;
export type AddPropertyToCategoryDtoRequest = {
  categoryId: number;
  propertyId: number;
};

export type DeletePropertyFromCategoryDtoResponse = void;
export type DeletePropertyFromCategoryDtoRequest = {
  categoryId: number;
  propertyId: number;
};
