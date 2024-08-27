import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

interface Transaction {
  uid: string;
  tradeIn: number;
  tradeOut: number;
}

interface TransactionDetailsProps {
  transaction: Transaction;
}

const dummyTradeInData = [
  {
    pointsTradedIn: 50,
    pointsTradedFrom: 150,
    date: "2024-08-24",
    time: "00:15:00",
    hash: "0x5cb2buhwugfuiwf...",
    fee: 3,
  },
  {
    pointsTradedIn: 150,
    pointsTradedFrom: 100,
    date: "2024-08-24",
    time: "00:15:00",
    hash: "0x5nuonlaifnioafiiiah...",
    fee: 2,
  },
];

const dummyTradeOutData = [
  {
    pointsTradedOut: 25,
    pointsTradedInto: 245,
    date: "2024-08-24",
    time: "00:15:00",
    hash: "0x5cb2buhwugfuiwf...",
    fee: 5,
  },
  {
    pointsTradedOut: 200,
    pointsTradedInto: 392,
    date: "2024-08-24",
    time: "00:15:00",
    hash: "0x5nuonlaifnioafiiiah...",
    fee: 8,
  },
];

export default function BrandTransactionDetails({
  transaction,
}: TransactionDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Transaction details
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-lg mb-4">User ID: {transaction.uid}</p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Trade-in</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Points traded in</TableHead>
                    <TableHead>Points traded from</TableHead>
                    <TableHead>Transaction date</TableHead>
                    <TableHead>Transaction Hash</TableHead>
                    <TableHead>Transaction fee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyTradeInData.map((trade, index) => (
                    <TableRow key={index}>
                      <TableCell>{trade.pointsTradedIn}</TableCell>
                      <TableCell>{trade.pointsTradedFrom}</TableCell>
                      <TableCell>{`${trade.date} ${trade.time}`}</TableCell>
                      <TableCell className="text-yellow-500">
                        {trade.hash}
                      </TableCell>
                      <TableCell>{trade.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Trade-out</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No. of points traded out</TableHead>
                    <TableHead>No. of points traded into</TableHead>
                    <TableHead>Transaction date</TableHead>
                    <TableHead>Transaction Hash</TableHead>
                    <TableHead>Transaction fee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyTradeOutData.map((trade, index) => (
                    <TableRow key={index}>
                      <TableCell>{trade.pointsTradedOut}</TableCell>
                      <TableCell>{trade.pointsTradedInto}</TableCell>
                      <TableCell>{`${trade.date} ${trade.time}`}</TableCell>
                      <TableCell className="text-yellow-500">
                        {trade.hash}
                      </TableCell>
                      <TableCell>{trade.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
