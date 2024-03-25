import { TableCell, TableRow } from "@/shared/ui/table"
import { AddCategoryDialog } from "../../addCategory/ui/AddCategoryDialog"
import { SetIsFinalCategoryDialog } from "../../setIsFinalCategory/ui/SetIsFinalCategoryDialog"
import { CategoryPropertiesDialog } from "@/features/property/categoryProperties/ui/CategoryPropertiesDialog"

type CategoriesTreeItemProps = {
    id: number
    name: string
    description: string
    level: number
    hasChildren: boolean
    isFinal: boolean
}

export const CategoriesTreeItem = (props: CategoriesTreeItemProps) => {
    const {
        id,
        name,
        description,
        level,
        hasChildren,
        isFinal
    } = props

    // const offsetClassName = `pl-[${level * 80}px]`
    console.log(name, !hasChildren, isFinal)

    return (
        <TableRow>
            <TableCell>
                <AddCategoryDialog parentId={id} parentName={name} isFinal={isFinal} />
                {(!hasChildren || isFinal) && <SetIsFinalCategoryDialog id={id} isFinal={isFinal} name={name} />}
                {isFinal && <CategoryPropertiesDialog categoryId={id} categoryName={name}/>}
            </TableCell>
            <TableCell style={level ? { paddingLeft: 50 * level } : null}>
                {name}
            </TableCell>
            <TableCell>
                {description}
            </TableCell>
        </TableRow>
    )
}