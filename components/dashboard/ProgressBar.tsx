'use client';

import { useMemo } from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  target?: number;
  showLabel?: boolean;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'emerald' | 'sky' | 'amber' | 'rose' | 'auto';
  className?: string;
  label?: string;
  formatValue?: (value: number, max: number) => string;
}

const sizeStyles = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

const colorStyles = {
  emerald: {
    bg: 'bg-emerald-100',
    fill: 'bg-emerald-500',
    text: 'text-emerald-700',
  },
  sky: {
    bg: 'bg-sky-100',
    fill: 'bg-sky-500',
    text: 'text-sky-700',
  },
  amber: {
    bg: 'bg-amber-100',
    fill: 'bg-amber-500',
    text: 'text-amber-700',
  },
  rose: {
    bg: 'bg-rose-100',
    fill: 'bg-rose-500',
    text: 'text-rose-700',
  },
};

export default function ProgressBar({
  value,
  max = 100,
  target,
  showLabel = false,
  showValue = false,
  size = 'md',
  color = 'sky',
  className = '',
  label,
  formatValue,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const targetPercentage = target ? Math.min(100, (target / max) * 100) : null;

  // Auto color based on performance vs target
  const autoColor = useMemo(() => {
    if (color !== 'auto') return color;
    if (!target) return 'sky';

    const ratio = value / target;
    if (ratio >= 1) return 'emerald';
    if (ratio >= 0.8) return 'sky';
    if (ratio >= 0.5) return 'amber';
    return 'rose';
  }, [color, value, target]);

  const styles = colorStyles[autoColor];

  const displayValue = formatValue
    ? formatValue(value, max)
    : `${Math.round(percentage)}%`;

  return (
    <div className={className}>
      {/* Label and Value */}
      {(showLabel || showValue) && (
        <div className="flex items-center justify-between mb-1">
          {showLabel && label && (
            <span className="text-xs font-medium text-gray-600">{label}</span>
          )}
          {showValue && (
            <span className={`text-xs font-semibold ${styles.text}`}>
              {displayValue}
            </span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div className={`relative w-full rounded-full ${styles.bg} ${sizeStyles[size]}`}>
        {/* Fill */}
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out ${styles.fill}`}
          style={{ width: `${percentage}%` }}
        />

        {/* Target marker */}
        {targetPercentage !== null && (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-0.5 h-[150%] bg-gray-800 opacity-50"
            style={{ left: `${targetPercentage}%` }}
            title={`Target: ${target}`}
          />
        )}
      </div>
    </div>
  );
}

// Circular progress indicator
interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: 'emerald' | 'sky' | 'amber' | 'rose';
  showValue?: boolean;
  className?: string;
}

export function CircularProgress({
  value,
  max = 100,
  size = 48,
  strokeWidth = 4,
  color = 'sky',
  showValue = true,
  className = '',
}: CircularProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    emerald: '#10b981',
    sky: '#0ea5e9',
    amber: '#f59e0b',
    rose: '#f43f5e',
  };

  const bgColorMap = {
    emerald: '#d1fae5',
    sky: '#e0f2fe',
    amber: '#fef3c7',
    rose: '#ffe4e6',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColorMap[color]}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colorMap[color]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showValue && (
        <span className="absolute text-xs font-semibold text-gray-700">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}

// Goal progress card
interface GoalProgressProps {
  title: string;
  current: number;
  target: number;
  unit?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function GoalProgress({
  title,
  current,
  target,
  unit = '',
  icon,
  className = '',
}: GoalProgressProps) {
  const percentage = Math.min(100, (current / target) * 100);
  const isComplete = current >= target;

  return (
    <div className={`p-3 rounded-lg border border-gray-200 bg-white ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-gray-500">{icon}</span>}
        <span className="text-sm font-medium text-gray-700">{title}</span>
        {isComplete && (
          <span className="ml-auto px-1.5 py-0.5 text-[10px] font-medium bg-emerald-100 text-emerald-700 rounded">
            Complete
          </span>
        )}
      </div>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-xl font-bold text-gray-900">
          {current.toLocaleString()}{unit}
        </span>
        <span className="text-sm text-gray-500 mb-0.5">
          / {target.toLocaleString()}{unit}
        </span>
      </div>
      <ProgressBar
        value={current}
        max={target}
        color="auto"
        size="sm"
      />
    </div>
  );
}
