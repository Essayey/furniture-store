import { useForm } from "react-hook-form";
import { ProductFormSchema, productFormSchema } from "../model/productFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProductMutation } from "@/entities/product";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { useState } from "react";
import { useAllCategoriesQuery } from "@/entities/category";
import { useFindAllPropertiesByCategoryIdQuery } from "@/entities/property";

export const CreateProductForm = () => {
  const [createProduct] = useCreateProductMutation();
  const { data: categories, isLoading } = useAllCategoriesQuery();
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const { data: properties } = useFindAllPropertiesByCategoryIdQuery({ id: categoryId });
  console.log(categories);
  const productForm = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      amount: 0,
      categoryId: null,
      description: "",
      image: undefined,
      name: "",
      price: 0,
      properties: [],
    },
  });
  const onSubmit = (data: ProductFormSchema) => {
    const { amount, categoryId, description, name, price, properties, image } = data;
    createProduct({
      amount,
      categoryId,
      description,
      name,
      price,
      properties,
      img: image,
    });
  };

  return (
    <div className="container py-2 border border-black rounded-lg w-96">
      <Form {...productForm}>
        <form onSubmit={productForm.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={productForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название продукта</FormLabel>
                <FormControl>
                  <Input placeholder="введите название продукта..." {...field} />
                </FormControl>
                <FormDescription>Это поле ввода названия продукта</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена продукта</FormLabel>
                <FormControl>
                  <Input placeholder="введите цену продукта" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Количество продуктов</FormLabel>
                <FormControl>
                  <Input placeholder="введите количество продуктов" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Картинка продукта</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="Картинка продукта" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="properties"
            render={({ field }) => (
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Выбрать свойство</Button>
                </DialogTrigger>
                <DialogContent>
                  <FormItem>
                    <FormLabel>Уникальный идентификатор</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent {...field}>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                </DialogContent>
              </Dialog>
            )}
          />
          <FormField
            control={productForm.control}
            name="categoryId"
            render={({ field }) => (
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Выбрать категорию</Button>
                </DialogTrigger>
                <DialogContent>
                  <FormItem>
                    <FormLabel>Уникальный идентификатор</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent {...field}>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                </DialogContent>
              </Dialog>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
