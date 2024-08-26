import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <div className="flex space-x-2 mt-4">
          <Link
            className="bg-neutral-800 p-1 px-4 rounded-md text-sm"
            href="/brand/dashboard/home"
          >
            Home
          </Link>
          <Link
            className="bg-neutral-800 p-1 px-4 rounded-md text-sm"
            href="/brand/dashboard/"
          >
            Overview
          </Link>

          <Link
            className="bg-neutral-800 p-1 px-4 rounded-md text-sm"
            href="/brand/dashboard/transactions"
          >
            Transactions
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}
