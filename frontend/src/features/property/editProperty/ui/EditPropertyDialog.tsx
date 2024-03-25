import React, { SyntheticEvent, useState, useRef } from "react";
import { usePathPropertyByIdMutation } from "@/entities/property";
import { Button, Input } from "@/shared/ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Label } from "@/shared/ui/label";

export type EditPropertyDialogProps = {
  id: number;
  name: string;
  description: string;
  options: string[];
};

export const EditPropertyDialog = (props: EditPropertyDialogProps) => {
  const { id, name, description, options } = props;

  const [patch] = usePathPropertyByIdMutation();
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newOptions, setNewOptions] = useState(options);
  const optionRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    patch({ id, name: newName, description: newDescription, options: newOptions });
  };

  const addOption = () => {
    setNewOptions([...newOptions, ""]);
  };

  const removeOption = (index: number) => {
    setNewOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Редактировать свойство</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Редактировать свойство {name}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right col-span-1">
                Название
              </Label>
              <Input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                id="name"
                defaultValue="Мебель для кухни..."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right col-span-1">
                Описание
              </Label>
              <Input
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                id="username"
                defaultValue="Очень хорошая мебель"
                className="col-span-3"
              />
            </div>
            {newOptions.map((option, index) => (
              <div key={index} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={`option${index}`} className="text-right col-span-1">
                  Возможное значение
                </Label>
                <Input
                  ref={(el) => (optionRefs.current[index] = el)}
                  value={option}
                  onChange={(e) => {
                    setNewOptions((prevOptions) =>
                      prevOptions.map((opt, i) => (i === index ? e.target.value : opt))
                    );
                  }}
                  id={`option${index}`}
                  defaultValue="Красный"
                  className="col-span-2"
                />
                <Button onClick={() => removeOption(index)} className="col-span-1">
                  Удалить
                </Button>
              </div>
            ))}
            <div className="grid grid-cols-4 items-center gap-4">
              <Button type="button" onClick={addOption} className="col-span-4">
                Добавить возможное значение
              </Button>
            </div>
            <DialogFooter className="grid grid-cols-4 items-center gap-4">
              <DialogClose className="col-span-4">
                <Button type="submit">Изменить</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
