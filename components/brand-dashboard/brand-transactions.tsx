import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import BrandTransactionDetails from "./brand-transaction-details";

// Mock data
const transactions = [
  { uid: "U5834 9943", tradeIn: 50, tradeOut: 469 },
  { uid: "U5854 5935", tradeIn: 1004, tradeOut: 824 },
  { uid: "U6365 2092", tradeIn: 2955, tradeOut: 1847 },
  { uid: "U6274 6706", tradeIn: 84, tradeOut: 82 },
  { uid: "U6274 5674", tradeIn: 199, tradeOut: 1049 },
  { uid: "U7286 0764", tradeIn: 7382, tradeOut: 12 },
  { uid: "U7860 4642", tradeIn: 2978, tradeOut: 1984 },
  { uid: "U7860 7442", tradeIn: 584, tradeOut: 1942 },
];

export default function BrandTransactions() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("uid");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredTransactions = transactions
    .filter((t) => t.uid.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a[sortBy as keyof typeof a] < b[sortBy as keyof typeof b])
        return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy as keyof typeof a] > b[sortBy as keyof typeof b])
        return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const pageCount = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full mx-auto p-4 space-y-4 bg-background text-foreground">
      <div className="flex justify-between items-center">
        <Input
          className="w-64"
          placeholder="Search UID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex space-x-2">
          <Select onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">High to Low</SelectItem>
              <SelectItem value="desc">Low to High</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tradeIn">Trade-in</SelectItem>
              <SelectItem value="tradeOut">Trade-out</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Jan 20, 2023 - Feb 09, 2023
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User UID</TableHead>
            <TableHead>Trade-in</TableHead>
            <TableHead>Trade-out</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions.map((transaction) => (
            <TableRow key={transaction.uid}>
              <TableCell>{transaction.uid}</TableCell>
              <TableCell>{transaction.tradeIn}</TableCell>
              <TableCell>{transaction.tradeOut}</TableCell>
              <TableCell className="text-right">
                <BrandTransactionDetails transaction={transaction} />
                <Button variant="link" className="text-yellow-500">
                  Download pdf
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center items-center space-x-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
          disabled={currentPage === pageCount}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
