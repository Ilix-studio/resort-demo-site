import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function RevenueChart() {
  const data = [
    { week: "Week 1", revenue: 12500, expenses: 4200 },
    { week: "Week 2", revenue: 15800, expenses: 4500 },
    { week: "Week 3", revenue: 14200, expenses: 4300 },
    { week: "Week 4", revenue: 18900, expenses: 4800 },
    { week: "Week 5", revenue: 16500, expenses: 4600 },
    { week: "Week 6", revenue: 21200, expenses: 5000 },
    { week: "Week 7", revenue: 19800, expenses: 4900 },
  ];

  return (
    <Card className='border-border'>
      <CardHeader>
        <CardTitle>Revenue vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
              <XAxis dataKey='week' stroke='#6b7280' />
              <YAxis stroke='#6b7280' />

              <Legend />
              <Bar
                dataKey='revenue'
                fill='#10b981'
                radius={[8, 8, 0, 0]}
                name='Revenue'
              />
              <Bar
                dataKey='expenses'
                fill='#ef4444'
                radius={[8, 8, 0, 0]}
                name='Expenses'
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
