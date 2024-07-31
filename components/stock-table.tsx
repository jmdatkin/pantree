import { DataTable } from "./ui/data-table";
import { Table } from "./ui/table";
import { ColumnDef } from "@tanstack/react-table";

type Stock = {
  item: string;
  quantity: number;
};

const SAMPLE_ITEMS: Stock[] = [
  {
    item: "apple",
    quantity: 3,
  },
  {
    item: "banana",
    quantity: 5,
  },
  {
    item: "cherry",
    quantity: 7,
  },
];
export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
];

const StockTable = () => {
  return <DataTable columns={columns} data={SAMPLE_ITEMS}></DataTable>;
};
export default StockTable;
