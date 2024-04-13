import { CategoryCard, useAllCategoriesQuery } from "@/entities/category";
import { useNavigate } from "react-router-dom";

export const CategorySelect = () => {
  const { data: categories } = useAllCategoriesQuery();
  const navigate = useNavigate();
  const onClickCategory = (id: number) => {
    navigate(`/category/:${id}`);
  };
  return (
    <div className="grid grid-cols-6 gap-6 ">
      {categories?.map((category) => {
        return category.childCategories.map((category) => (
          <CategoryCard
            id={category.id}
            onClick={onClickCategory}
            description={category.description}
            name={category.name}
          />
        ));
      })}
    </div>
  );
};
