import { getAnalytics } from "@/actions/get-analytics";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Chart } from "./_components/chart";
import { DataCard } from "./_components/data-card";


export interface IAnalyticsPageProps {
}

export default async function AnalyticsPage(props: IAnalyticsPageProps) {
  const { userId } = auth()
  if (!userId) return redirect("/")

  const {
    data,
    totalRevenue,
    totalSales
  } = await getAnalytics(userId)

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard
          value={totalRevenue}
          label="Total Revenue"
          shouldFormat={true}
        />
        <DataCard
          value={totalSales}
          label="Total Sales"
          shouldFormat={true}
        />
      </div>

      <Chart
        data={data}
      />
    </div>
  );
}
