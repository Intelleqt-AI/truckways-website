'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface HealthScoreCardProps {
  score: number;
  trend: number;
  breakdown: {
    cashFlow: number;
    margin: number;
    efficiency: number;
  };
}

export default function HealthScoreCard({ score, trend, breakdown }: HealthScoreCardProps) {
  // Calculate color based on score
  const getScoreColor = () => {
    if (score >= 75) return { ring: '#10b981', bg: 'bg-emerald-50', text: 'text-emerald-600' };
    if (score >= 50) return { ring: '#f59e0b', bg: 'bg-amber-50', text: 'text-amber-600' };
    return { ring: '#f43f5e', bg: 'bg-rose-50', text: 'text-rose-600' };
  };

  const colors = getScoreColor();

  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative w-20 h-20 flex-shrink-0 cursor-help">
                  <svg className="w-20 h-20 transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#e5e7eb"
                      strokeWidth="5"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke={colors.ring}
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 36}
                      strokeDashoffset={2 * Math.PI * 36 - (score / 100) * 2 * Math.PI * 36}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Score text in center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{score}</span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-wide">Score</span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="p-3">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900">Health Score Breakdown</p>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-600">Cash Flow</span>
                      <span className="font-medium">{breakdown.cashFlow}/100</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-600">Margin</span>
                      <span className="font-medium">{breakdown.margin}/100</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-600">Efficiency</span>
                      <span className="font-medium">{breakdown.efficiency}/100</span>
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="text-sm text-gray-500 font-medium">Business Health</p>
        <p className={`text-lg font-bold ${colors.text} mt-1`}>
          {score >= 75 ? 'Healthy' : score >= 50 ? 'Needs Attention' : 'Critical'}
        </p>
        <div className={`flex items-center gap-1 text-xs font-medium mt-1 ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend > 0 ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{trend > 0 ? '+' : ''}{trend} pts from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
