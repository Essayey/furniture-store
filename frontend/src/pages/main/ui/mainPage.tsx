import {
  useAllCategoriesQuery,
  useCreateCategoriesMutation,
  usePathCategoryByIdMutation,
} from "@/entities/category";
import { memo, useEffect } from "react";

export const MainPage = memo(() => {
  const { data, isLoading } = useAllCategoriesQuery();
  const [createCategory] = useCreateCategoriesMutation();
  const [updateCategory] = usePathCategoryByIdMutation();

  console.log(data);
  return (
    <div>{data?.map((category) => category?.childCategories.map((category) => category.name))}</div>
  );
});
