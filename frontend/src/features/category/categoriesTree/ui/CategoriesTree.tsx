import { Category } from "@/entities/category/model/types"
import { CategoriesTreeItem } from "./CategoriesTreeItem"


type CategoriesTreeProps = {
    category: Category
    level: number
}

export const CategoriesTree = (props: CategoriesTreeProps) => {
    const {
        category,
        level
    } = props
    console.log(category)

    return (
        <>
            <CategoriesTreeItem description={category?.description} name={category?.name} id={category?.id} level={level}/>
            {category.childCategories.map(childCategory => <CategoriesTree category={childCategory} level={level + 1} key={childCategory.id}/>)}
        </>
    )
}