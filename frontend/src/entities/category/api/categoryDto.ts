import { Category } from "../model/types";

export type AllCategoriesDtoRequset = void;
export type AllCategoriesDtoResponse = Category[];

export type FinalCategoriesDtoRequest = void;
export type FinalCategoriesDtoResponse = Omit<Category, "childCategories" | "properties">;

export type CategoriesByIdDtoResponse = Category;
export type CategoriesByIdDtoRequest = { id: number };

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
export type DeleteCategoryByIdDtoRequest = { id: number };

export type AddPropertyToCategoryDtoResponse = void;
export type AddPropertyToCategoryDtoRequest = {
  categoryId: number;
  propertyId: number;
};
export type SetIsFinalCategoryDtoResponse = Category;
export type SetIsFinalCategoryDtoRequest = { id: number; isFinal: boolean };

export type DeletePropertyFromCategoryDtoResponse = void;
export type DeletePropertyFromCategoryDtoRequest = {
  categoryId: number;
  propertyId: number;
};
