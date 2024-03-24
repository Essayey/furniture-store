import { Category } from "../model/types";

export const findLeafCategoryWithProperties = (category: Category): Category | null => {
  if (
    category.properties &&
    category.properties.length > 0 &&
    category.childCategories.length === 0
  ) {
    return category;
  }

  for (const childCategory of category.childCategories) {
    const leafCategory = findLeafCategoryWithProperties(childCategory);
    if (leafCategory) {
      return leafCategory;
    }
  }

  return null;
};
