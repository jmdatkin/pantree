import StockTable from "@/components/stock-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const StockPage = () => {
  return (
    <div className="w-full h-full px-6 flex flex-col justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Pantry Inventory</CardTitle>
          <CardDescription>
            View and manage the items in your pantry.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StockTable></StockTable>
        </CardContent>
      </Card>
    </div>
  );
};
export default StockPage;
