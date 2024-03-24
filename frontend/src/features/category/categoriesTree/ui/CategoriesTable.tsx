import { useAllCategoriesQuery } from "@/entities/category"
import { Category } from "@/entities/category/model/types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { CategoriesTree } from "./CategoriesTree"

export const CategoriesTable = () => {
    const { data: categories, isLoading } = useAllCategoriesQuery()


    if (isLoading) return null
    console.log(categories)

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>

                    </TableCell>
                    <TableCell>
                        Название категории
                    </TableCell>
                    <TableCell>
                        Описание категории
                    </TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories?.map(category => <CategoriesTree category={category as Category} level={0} />)}
            </TableBody>
        </Table>
    )
}