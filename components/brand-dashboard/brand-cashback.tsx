"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

const cashbackData = [
  {
    id: 1,
    month: "January",
    noOfUsers: 6789,
    volume: 457890,
    status: "Received",
  },
  {
    id: 2,
    month: "February",
    noOfUsers: 150,
    volume: 457890,
    status: "Received",
  },
  {
    id: 3,
    month: "March",
    noOfUsers: 150,
    volume: 457890,
    status: "In progress",
  },
  {
    id: 4,
    month: "April",
    noOfUsers: 150,
    volume: 457890,
    status: "In progress",
  },
];

type Props = {
  isOpen: boolean;
};

export default function Component({ isOpen }: Props) {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <ChevronRight size={32} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Cashbacks</DialogTitle>
        </DialogHeader>
        <div className="w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No. of users</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cashbackData.map((row) => (
                <Collapsible
                  key={row.id}
                  open={expandedRows.includes(row.id)}
                  onOpenChange={() => toggleRow(row.id)}
                  asChild
                >
                  <>
                    <TableRow>
                      <TableCell>{row.noOfUsers}</TableCell>
                      <TableCell>{row.month}</TableCell>
                      <TableCell>{row.volume}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row.status === "Received"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {row.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            {expandedRows.includes(row.id) ? (
                              <>
                                Hide details{" "}
                                <ChevronUp className="ml-2 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                View details{" "}
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </CollapsibleTrigger>
                      </TableCell>
                    </TableRow>
                    <CollapsibleContent asChild>
                      <TableRow>
                        <TableCell colSpan={5} className="p-0">
                          <div className="p-4 bg-muted">
                            <h4 className="font-semibold mb-2">
                              Additional Details for {row.month}
                            </h4>
                            <p>Total Transactions: 1,234</p>
                            <p>Average Cashback: $12.50</p>
                            <p>Top Category: Electronics</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </CollapsibleContent>
                  </>
                </Collapsible>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
