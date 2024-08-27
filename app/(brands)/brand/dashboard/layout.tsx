export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container">
      <h2 className="text-2xl font-syne px-2">Dashboard</h2>
      {children}
    </main>
  );
}
