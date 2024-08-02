"use client";

import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postItems } from "@/app/firebase";
import useUser from "@/app/_hooks/use-user";

const addPantryItemSchema = z.object({
  item: z.string().min(1),
  quantity: z.string(),
});

const AddPantryItemForm = () => {
  const user = useUser();

  const form = useForm<z.infer<typeof addPantryItemSchema>>({
    resolver: zodResolver(addPantryItemSchema),
    defaultValues: {
      item: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addPantryItemSchema>) => {
    if (user === null) return;
    postItems(user, {
      items: [
        {
          itemName: values.item,
          quantity: parseInt(values.quantity),
        },
      ],
    });
  };

  return (
    <div>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Add Pantry Item
              </CardTitle>
              <CardDescription>Add a new item to your pantry</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="item"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Name</FormLabel>
                      <FormControl>
                        <Input placeholder="apples" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="item-expiration">Expiration Date</Label>
                <Input id="item-expiration" type="date" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add Item</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
export default AddPantryItemForm;
