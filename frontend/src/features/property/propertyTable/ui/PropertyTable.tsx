import { useAllPropertiesQuery } from "@/entities/property"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/shared/ui/table"
import { PropertyTableItem } from "./PropertyTableItem"
import { CreatePropertyDialog } from "../../createProperty/ui/CreatePropertyDialog"


export const PropertyTable = () => {
    const { data: properties, isLoading } = useAllPropertiesQuery()


    if (isLoading) return null


    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>
                        <CreatePropertyDialog />
                    </TableCell>
                    <TableCell>
                        Название свойства
                    </TableCell>
                    <TableCell>
                        Описание свойства
                    </TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {properties?.map(property =>
                    <PropertyTableItem
                        description={property.description}
                        id={property.id} name={property.name}
                        options={property.options}
                        key={property.id} />
                )
                }
            </TableBody>
        </Table>
    )
}