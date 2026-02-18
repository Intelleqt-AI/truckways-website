'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  FileWarning,
  TrendingDown,
  AlertTriangle,
  User,
  Clock,
  Truck,
  AlertCircle,
  ChevronRight,
  Bell,
} from 'lucide-react';
import Link from 'next/link';
import type { Alert } from '@/lib/dashboard-data';
import { getTimeAgo } from '@/lib/dashboard-data';

interface AlertsFeedProps {
  alerts: Alert[];
  maxAlerts?: number;
}

const alertIcons = {
  overdue_invoice: FileWarning,
  margin_erosion: TrendingDown,
  cash_warning: AlertTriangle,
  driver_idle: User,
  quote_aging: Clock,
  vehicle_due: Truck,
};

const severityStyles = {
  critical: 'bg-rose-100 text-rose-700 border-rose-200',
  high: 'bg-rose-50 text-rose-600 border-rose-200',
  medium: 'bg-amber-100 text-amber-700 border-amber-200',
  info: 'bg-sky-100 text-sky-700 border-sky-200',
};

const severityDotStyles = {
  critical: 'bg-rose-500',
  high: 'bg-rose-400',
  medium: 'bg-amber-500',
  info: 'bg-sky-500',
};

export default function AlertsFeed({ alerts, maxAlerts = 5 }: AlertsFeedProps) {
  const displayAlerts = alerts.slice(0, maxAlerts);

  if (alerts.length === 0) {
    return (
      <Card className="bg-white border border-gray-200 shadow-sm h-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
              <AlertCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">All clear!</p>
            <p className="text-xs text-gray-400 mt-1">No urgent alerts at this time</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200 shadow-sm h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Alerts
            <Badge variant="secondary" className="ml-1 text-xs">
              {alerts.length}
            </Badge>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {displayAlerts.map((alert) => {
            const Icon = alertIcons[alert.type] || AlertCircle;
            return (
              <Link
                key={alert.id}
                href={alert.actionUrl}
                className="block group"
              >
                <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all">
                  {/* Severity dot */}
                  <div className="flex-shrink-0 pt-1">
                    <div className={`w-2 h-2 rounded-full ${severityDotStyles[alert.severity]}`} />
                  </div>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${severityStyles[alert.severity]}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate group-hover:text-sky-600 transition-colors">
                      {alert.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {alert.description}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      {getTimeAgo(alert.createdAt)}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {alerts.length > maxAlerts && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <Button
              variant="ghost"
              className="w-full text-sm text-gray-600 hover:text-gray-900"
              asChild
            >
              <Link href="/dashboard/alerts">
                View all {alerts.length} alerts
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
