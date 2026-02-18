'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Sparkline from './Sparkline';

interface KPICardProps {
  title: string;
  value: string;
  trend?: number;
  trendLabel?: string;
  icon: LucideIcon;
  subtitle?: string;
  isRefreshing?: boolean;
  sparklineData?: number[];
  target?: number;
  current?: number;
}

export default function KPICard({
  title,
  value,
  trend,
  trendLabel,
  icon: Icon,
  subtitle,
  isRefreshing,
  sparklineData,
  target,
  current,
}: KPICardProps) {
  const getTrendColor = () => {
    if (!trend) return 'text-gray-500';
    if (trend > 0) return 'text-emerald-600';
    if (trend < 0) return 'text-rose-600';
    return 'text-gray-500';
  };

  const getTrendIcon = () => {
    if (!trend) return <Minus className="w-3 h-3" />;
    if (trend > 0) return <TrendingUp className="w-3 h-3" />;
    return <TrendingDown className="w-3 h-3" />;
  };

  const formatTrend = () => {
    if (!trend) return '';
    const sign = trend > 0 ? '+' : '';
    return `${sign}${trend}${trendLabel || '%'}`;
  };

  return (
    <Card className={`bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${isRefreshing ? 'opacity-70' : 'opacity-100'}`}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center ${isRefreshing ? 'animate-pulse' : ''}`}>
            <Icon className="w-5 h-5 text-sky-600" />
          </div>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 text-xs font-medium ${getTrendColor()}`}>
              {getTrendIcon()}
              <span>{formatTrend()}</span>
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <div className="flex items-end justify-between gap-2">
            <p className="text-2xl font-bold text-gray-900 transition-all duration-300">{value}</p>
            {sparklineData && sparklineData.length > 1 && (
              <Sparkline
                data={sparklineData}
                width={60}
                height={24}
                strokeColor="auto"
                fillColor="auto"
                showArea={true}
              />
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-gray-400">{subtitle}</p>
          )}
          {target !== undefined && current !== undefined && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-500">Target</span>
                <span className="font-medium text-gray-700">{Math.round((current / target) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    current >= target ? 'bg-emerald-500' : current >= target * 0.8 ? 'bg-sky-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.min(100, (current / target) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
