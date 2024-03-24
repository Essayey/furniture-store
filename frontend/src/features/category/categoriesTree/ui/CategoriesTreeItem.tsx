import { TableCell, TableRow } from "@/shared/ui/table"
import { AddCategoryDialog } from "../../addCategory/ui/AddCategoryDialog"

type CategoriesTreeItemProps = {
    id: number
    name: string
    description: string
    level: number
}

export const CategoriesTreeItem = (props: CategoriesTreeItemProps) => {
    const {
        id,
        name,
        description,
        level
    } = props

    // const offsetClassName = `pl-[${level * 80}px]`

    return (
        <TableRow>
            <TableCell>
                <AddCategoryDialog  parentId={id} parentName={name}/>
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