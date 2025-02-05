"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BrandOverview from "@/components/brand-dashboard/brand-overview";
import BrandTransactions from "@/components/brand-dashboard/brand-transactions";
import ComingSoon from "@/components/brand-dashboard/coming-soon";
import BrandHome from "@/components/brand-dashboard/brand-home";

export default function TabsPage() {
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = pathname.split("/").pop() || "account";

  const handleTabChange = (value: string) => {
    router.push(`/brand/dashboard/${value}`);
  };

  const brandDashboardMenuItems = [
    {
      name: "Home",
      value: "home",
      link: "/brand/dashboard/home",
      content: <BrandHome />,
    },
    {
      name: "Overview",
      value: "overview",
      link: "/brand/dashboard/",
      content: <BrandOverview />,
    },
    {
      name: "Transactions",
      value: "transactions",
      link: "/brand/dashboard/transactions",
      content: <BrandTransactions />,
    },
    {
      name: "Analytics",
      value: "analytics",
      link: "/brand/dashboard/analytics",
      content: <ComingSoon />,
    },
  ];

  return (
    <Tabs value={currentTab} onValueChange={handleTabChange} className="mt-4">
      <TabsList className="mx-2">
        {brandDashboardMenuItems.map((item) => (
          <Link key={item.value} href={item.link} passHref legacyBehavior>
            <TabsTrigger value={item.value}>{item.name}</TabsTrigger>
          </Link>
        ))}
      </TabsList>
      {brandDashboardMenuItems.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
