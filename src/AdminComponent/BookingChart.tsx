import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function BookingChart() {
  const data = [
    { date: "Jan 1", bookings: 24, checkIns: 18, checkOuts: 12 },
    { date: "Jan 8", bookings: 32, checkIns: 28, checkOuts: 20 },
    { date: "Jan 15", bookings: 28, checkIns: 25, checkOuts: 18 },
    { date: "Jan 22", bookings: 45, checkIns: 42, checkOuts: 35 },
    { date: "Jan 29", bookings: 38, checkIns: 35, checkOuts: 28 },
    { date: "Feb 5", bookings: 52, checkIns: 48, checkOuts: 40 },
    { date: "Feb 12", bookings: 48, checkIns: 45, checkOuts: 38 },
  ];

  return (
    <Card className='border-border'>
      <CardHeader>
        <CardTitle>Booking Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
              <XAxis dataKey='date' stroke='#6b7280' />
              <YAxis stroke='#6b7280' />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Line
                type='monotone'
                dataKey='bookings'
                stroke='#3b82f6'
                strokeWidth={2}
                name='Bookings'
              />
              <Line
                type='monotone'
                dataKey='checkIns'
                stroke='#10b981'
                strokeWidth={2}
                name='Check-ins'
              />
              <Line
                type='monotone'
                dataKey='checkOuts'
                stroke='#f59e0b'
                strokeWidth={2}
                name='Check-outs'
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
