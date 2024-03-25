import { useDeletePropertyByIdMutation } from "@/entities/property"
import { Button } from "@/shared/ui"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"


type DeletePropertyDialogProps = {
    id: number
    name: string
}

export const DeletePropertyDialog = (props: DeletePropertyDialogProps) => {
    const { id, name } = props

    const [deleteProperty] = useDeletePropertyByIdMutation()

    const handleDelete = () => {
        deleteProperty({ id })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Удалить свойство</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Вы уверены, что хотите удалить свойство {name}?</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button type="submit" onClick={handleDelete}>Удалить свойство</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}