import { BookingChart } from "./BookingChart";
import { DashboardStats } from "./DashboardStats";
import { RecentActivity } from "./RecentActivity";
import { RevenueChart } from "./RevenueChart";

export default function AdminDashboard() {
  return (
    <>
      <br />
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
          <p className='text-muted-foreground mt-2'>
            Welcome back! Here's an overview of your resort's activity.
          </p>
        </div>

        {/* Key Stats */}
        <DashboardStats />

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <BookingChart />
          <RevenueChart />
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </>
  );
}
