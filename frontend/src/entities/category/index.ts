export {
  categoryApi,
  useAllCategoriesQuery,
  useCategoriesByIdQuery,
  useCreateCategoryMutation,
  usePathCategoryByIdMutation,
  useDeleteCategoryByIdMutation,
  useAddPropertyToCategoryMutation,
  useRemovePropertyFromCategoryMutation,
  useFinalCategoriesQuery,
  useSetIsFinalCategoryMutation,
} from "./api/categoryApi";
export { CategoryCard } from "./ui/CategoryCard";
export { type Category } from "./model/types";
