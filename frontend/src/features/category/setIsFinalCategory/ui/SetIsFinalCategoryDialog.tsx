import { useSetIsFinalCategoryMutation } from "@/entities/category"
import { Button } from "@/shared/ui"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/shared/ui/dialog"

export type SetIsFinalCategoryDialogProps = {
    id: number
    isFinal: boolean
    name: string
}

export const SetIsFinalCategoryDialog = (props: SetIsFinalCategoryDialogProps) => {
    const {
        id,
        isFinal,
        name
    } = props
    const [setIsFinal] = useSetIsFinalCategoryMutation()

    const handleClick = () => {
        setIsFinal({ id, isFinal: !isFinal })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Сделать {isFinal ? 'родительской' : 'финальной'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Сделать категорию {name} {isFinal ? 'родительской' : 'финальной'}
                    </DialogTitle>
                    <DialogDescription>
                        Если категория является финальной, в неё можно добавлять свойство, фильтровать, создавать товары по данной категории и кластеризировать данные
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={handleClick}>
                            Сделать {isFinal ? 'родительской' : 'финальной'}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}