import { useForm } from "react-hook-form";
import { ProductFormSchema, productFormSchema } from "../model/productFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProductMutation } from "@/entities/product";
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
} from "@/shared/ui";

export const CreateProductForm = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
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
    <div className="container py-2 border border-black rounded-lg ">
      <Form {...productForm}>
        <form onSubmit={productForm.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={productForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="input name..." {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
