import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  Home,
  CreditCard,
  CheckCircle,
  Clock,
} from "lucide-react";

export function DashboardStats() {
  // Mock data - replace with real backend data
  const stats = [
    {
      title: "Total Reservations",
      value: "324",
      change: "+12% from last month",
      icon: Home,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Check-ins",
      value: "248",
      change: "+8% from last month",
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Total Check-outs",
      value: "215",
      change: "-2% from last month",
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Total Guests",
      value: "1,247",
      change: "+45 new guests",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Total Revenue",
      value: "₹142,500",
      change: "+22% from last month",
      icon: CreditCard,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Occupancy Rate",
      value: "87.5%",
      change: "Outstanding performance",
      icon: TrendingUp,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {stats.map((stat) => (
        <Card key={stat.title} className='border-border'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ₹{stat.color}`}>
              <stat.icon className='w-5 h-5' />
            </div>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{stat.value}</div>
            <p className='text-xs text-muted-foreground mt-1'>{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
