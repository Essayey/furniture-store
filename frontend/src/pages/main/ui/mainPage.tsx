import { useGetAllCategoriesQuery } from "@/entities/category";
import { memo } from "react";

export const MainPage = memo(() => {
  const { data, isLoading } = useGetAllCategoriesQuery();
  console.log();
  if (isLoading) return null;
  if (data) console.log(data);
  console.log(data);
  return <div>asdfasdf</div>;
});
