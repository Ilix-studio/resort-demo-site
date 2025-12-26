import type React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LogIn,
  LogOut,
  BookOpen,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface Activity {
  id: string;
  type: "check-in" | "check-out" | "booking" | "cancellation" | "update";
  description: string;
  guestName: string;
  timestamp: string;
  icon: React.ReactNode;
  color: string;
}

export function RecentActivity() {
  const activities: Activity[] = [
    {
      id: "A001",
      type: "check-in",
      description: "Guest checked in",
      guestName: "Ilix",
      timestamp: "2 hours ago",
      icon: <LogIn size={16} />,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "A002",
      type: "booking",
      description: "New booking confirmed",
      guestName: "Ilix",
      timestamp: "3 hours ago",
      icon: <BookOpen size={16} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "A003",
      type: "check-out",
      description: "Guest checked out",
      guestName: "Ilix",
      timestamp: "5 hours ago",
      icon: <LogOut size={16} />,
      color: "bg-gray-100 text-gray-700",
    },
    {
      id: "A004",
      type: "update",
      description: "Booking updated",
      guestName: "Ilix",
      timestamp: "8 hours ago",
      icon: <CheckCircle2 size={16} />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "A005",
      type: "cancellation",
      description: "Booking cancelled",
      guestName: "Ilix",
      timestamp: "1 day ago",
      icon: <AlertCircle size={16} />,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <Card className='border-border'>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {activities.map((activity) => (
            <div
              key={activity.id}
              className='flex items-center gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0'
            >
              <div className={`p-2 rounded-lg ${activity.color}`}>
                {activity.icon}
              </div>
              <div className='flex-1 min-w-0'>
                <div className='font-medium'>{activity.description}</div>
                <div className='text-sm text-muted-foreground'>
                  {activity.guestName}
                </div>
              </div>
              <div className='text-sm text-muted-foreground whitespace-nowrap'>
                {activity.timestamp}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
