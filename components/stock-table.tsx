"use client";

import useUser from "@/app/_hooks/use-user";
import { DataTable } from "./ui/data-table";
import { Table } from "./ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getItems } from "@/app/firebase";

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
    accessorKey: "itemName",
    header: "Item Name",
    filterFn: "includesString",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    filterFn: "auto",
  },
];

const StockTable = () => {
  const user = useUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user === null) return;
    getItems(user).then((data) => setItems(data));
  }, [user]);

  console.log(items);

  return <DataTable columns={columns} data={items}></DataTable>;
};
export default StockTable;
