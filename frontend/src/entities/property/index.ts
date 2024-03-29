export type { Property } from "./model/types";
export {
  propertyApi,
  useAllPropertiesQuery,
  useCreatePropertyMutation,
  useDeletePropertyByIdMutation,
  useFindAllPropertiesByCategoryIdQuery,
  usePathPropertyByIdMutation,
  usePropertyByIdQuery,
  useLazyFindAllPropertiesByCategoryIdQuery,
  useFindExcludedPropertiesByCategoryIdQuery
} from "./api/propertyApi";
