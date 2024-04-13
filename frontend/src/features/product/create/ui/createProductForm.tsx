import { useFinalCategoriesQuery } from "@/entities/category";
import { useCreateProductMutation } from "@/entities/product";
import { useFindAllPropertiesByCategoryIdQuery } from "@/entities/property";
import {
  Button,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductFormSchema, productFormSchema } from "../model/productFormSchema";
import { createFormDataFromObject } from "@/shared/lib";

export const CreateProductForm = () => {
  const [createProduct] = useCreateProductMutation();
  const { data: finalCategories, isLoading: isFinalCategoriesLoading } = useFinalCategoriesQuery();

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

  const { data: properties, isLoading: isPropertiesLoading } =
    useFindAllPropertiesByCategoryIdQuery({
      id: productForm.getValues("categoryId"),
    });

  useEffect(() => {
    if (properties)
      productForm.setValue(
        "properties",
        properties?.map((prop) => ({ propertyId: prop.id, value: undefined })),
      );
  }, [JSON.stringify(properties)]);

  const handleChangeFile = (e) => {
    console.log(e.target.files);
    productForm.setValue("image", e.target.files[0]);
  };

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
                  <Input
                    type="number"
                    placeholder="введите цену продукта"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
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
                  <Input
                    type="number"
                    placeholder="введите количество продуктов"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание продукта</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="введите описание продуктов" {...field} />
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
                  <Input
                    type="file"
                    placeholder="Картинка продукта"
                    onChange={(e) => handleChangeFile(e)}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Уникальный идентификатор</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(+e);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Категории" />
                    </SelectTrigger>
                    <SelectContent {...field}>
                      {finalCategories?.map((category) => (
                        <SelectItem
                          // onChange={() => setCategoryId(category.id)}
                          key={category.id}
                          value={String(category.id)}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {properties?.map((property, index) => (
            <FormField
              key={property.id}
              control={productForm.control}
              name={`properties.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{property.name}</FormLabel>
                  <FormControl>
                    {property.options.length ? (
                      <Select
                        key={property.id}
                        onValueChange={(e) => field.onChange(e)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Свойства" />
                        </SelectTrigger>
                        <SelectContent>
                          {property.options.map((option) => (
                            <SelectItem {...field} value={option} key={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input placeholder="Введите свойство" {...field} />
                    )}
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
