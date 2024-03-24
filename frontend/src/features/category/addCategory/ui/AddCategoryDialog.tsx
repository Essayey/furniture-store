import { useCreateCategoryMutation } from "@/entities/category"
import { Button, Input } from "@/shared/ui"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { Label } from "@/shared/ui/label"
import { SyntheticEvent, useState } from "react"

export type AddCategoryModalProps = {
    parentId: number,
    parentName: string
}

export const AddCategoryDialog = (props: AddCategoryModalProps) => {
    const {
        parentId,
        parentName
    } = props
    const [create] = useCreateCategoryMutation()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault()
        create({ description, name, parentId })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Добавить дочернюю</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Добавить дочернюю категорию для категории {parentName}</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Название
                            </Label>
                            <Input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                id="name"
                                defaultValue="Мебель для кухни..."
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Описание
                            </Label>
                            <Input
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                id="username"
                                defaultValue="Очень хорошая мебель"
                                className="col-span-3"
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Добавить</Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}