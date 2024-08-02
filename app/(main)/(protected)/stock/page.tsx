import AddPantryItemForm from "@/components/add-pantry-item-form";
import StockTable from "@/components/stock-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { TypographyH2 } from "@/components/ui/typography-h2";

const StockPage = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col max-w-4xl mx-auto gap-8">
      <TypographyH2>Pantree</TypographyH2>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Pantry Inventory</CardTitle>
          <CardDescription>
            View and manage the items in your pantry.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StockTable></StockTable>
        </CardContent>
      </Card>
      <AddPantryItemForm />
    </div>
  );
};
export default StockPage;
