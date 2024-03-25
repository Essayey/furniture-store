import { TableCell, TableRow } from "@/shared/ui/table"
import { EditPropertyDialog } from "../../editProperty/ui/EditPropertyDialog"
import { DeletePropertyDialog } from "../../deleteProperty/ui/DeletePropertyDialog"


type PropertyTableItemProps = {
    id: number
    name: string
    description: string
    options: string[]
}

export const PropertyTableItem = (props: PropertyTableItemProps) => {
    const {
        id,
        name,
        description,
        options
    } = props


    return (
        <TableRow>
            <TableCell>
                <EditPropertyDialog description={description} id={id} name={name} options={options} />
                <DeletePropertyDialog id={id} name={name} />
            </TableCell>
            <TableCell>
                {name}
            </TableCell>
            <TableCell>
                {description}
            </TableCell>
        </TableRow>
    )
}