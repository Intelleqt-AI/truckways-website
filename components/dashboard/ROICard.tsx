'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, TrendingUp, Clock, Truck } from 'lucide-react';
import type { ROIData } from '@/lib/dashboard-data';
import { formatCurrency } from '@/lib/dashboard-data';

interface ROICardProps {
  data: ROIData;
}

export default function ROICard({ data }: ROICardProps) {
  const breakdownItems = [
    {
      icon: TrendingUp,
      label: 'Pricing optimization',
      value: data.breakdown.pricingOptimization,
      color: 'text-sky-600 bg-sky-50',
    },
    {
      icon: Clock,
      label: 'Faster payments',
      value: data.breakdown.fasterPayments,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      icon: Truck,
      label: 'Reduced empty km',
      value: data.breakdown.reducedEmptyKm,
      color: 'text-sky-600 bg-sky-50',
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 shadow-sm">
      <CardContent className="p-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Main message */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">TruckWys Impact</p>
              <p className="text-xl font-bold text-gray-900 mt-0.5">
                You've saved{' '}
                <span className="text-emerald-600">
                  {formatCurrency(data.totalSavings, data.currency)}
                </span>{' '}
                this month
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Through optimised pricing and faster payments
              </p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {breakdownItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2 border border-white"
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <p className="text-gray-500">{item.label}</p>
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(item.value, data.currency)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
