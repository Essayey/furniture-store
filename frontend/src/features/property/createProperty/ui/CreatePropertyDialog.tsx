import React, { SyntheticEvent, useState, useRef } from "react";
import { useCreatePropertyMutation } from "@/entities/property";
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

export const CreatePropertyDialog = () => {
  const [create] = useCreatePropertyMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const optionRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    create({ name, description, optional: false, options });
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить свойство</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить новое свойство</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right col-span-1">
                Название
              </Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="username"
                defaultValue="Очень хорошая мебель"
                className="col-span-3"
              />
            </div>
            {options.map((option, index) => (
              <div key={index} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={`option${index}`} className="text-right col-span-1">
                  Возможное значение
                </Label>
                <Input
                  ref={(el) => (optionRefs.current[index] = el)}
                  value={option}
                  onChange={(e) => {
                    setOptions((prevOptions) =>
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
                <Button type="submit">Добавить свойство</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
