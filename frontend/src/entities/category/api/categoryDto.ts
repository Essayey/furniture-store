import { Category } from "../model/types";

export type getAllCategoriesDtoResponse = Category[];

export type getCategoriesByIdDtoResponse = Category;
export type getCategoriesByIdDtoRequest = { id: string };
