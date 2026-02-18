'use client';

import { useMemo } from 'react';

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  showDots?: boolean;
  showArea?: boolean;
  className?: string;
}

export default function Sparkline({
  data,
  width = 80,
  height = 24,
  strokeColor = '#0ea5e9', // sky-500
  fillColor = '#e0f2fe', // sky-100
  strokeWidth = 1.5,
  showDots = false,
  showArea = true,
  className = '',
}: SparklineProps) {
  const { path, areaPath, points } = useMemo(() => {
    if (!data || data.length < 2) {
      return { path: '', areaPath: '', points: [] };
    }

    const padding = 2;
    const effectiveWidth = width - padding * 2;
    const effectiveHeight = height - padding * 2;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    // Calculate points
    const pts = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * effectiveWidth;
      const y = padding + effectiveHeight - ((value - min) / range) * effectiveHeight;
      return { x, y, value };
    });

    // Create SVG path
    const linePath = pts
      .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
      .join(' ');

    // Create area path (closed shape for fill)
    const area = `${linePath} L ${pts[pts.length - 1].x} ${height - padding} L ${pts[0].x} ${height - padding} Z`;

    return { path: linePath, areaPath: area, points: pts };
  }, [data, width, height]);

  if (!data || data.length < 2) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-[10px] text-gray-400">No data</span>
      </div>
    );
  }

  // Determine trend color based on first and last values
  const trend = data[data.length - 1] - data[0];
  const trendStrokeColor = trend >= 0 ? '#10b981' : '#f43f5e'; // emerald-500 or rose-500
  const trendFillColor = trend >= 0 ? '#d1fae5' : '#ffe4e6'; // emerald-100 or rose-100

  const finalStrokeColor = strokeColor === 'auto' ? trendStrokeColor : strokeColor;
  const finalFillColor = fillColor === 'auto' ? trendFillColor : fillColor;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Area fill */}
      {showArea && (
        <path
          d={areaPath}
          fill={finalFillColor}
          opacity={0.5}
        />
      )}

      {/* Line */}
      <path
        d={path}
        fill="none"
        stroke={finalStrokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      {showDots && points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={2}
          fill={finalStrokeColor}
        />
      ))}

      {/* End dot (always show) */}
      <circle
        cx={points[points.length - 1]?.x}
        cy={points[points.length - 1]?.y}
        r={2.5}
        fill={finalStrokeColor}
      />
    </svg>
  );
}

// Mini sparkline for inline use
interface MiniSparklineProps {
  data: number[];
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function MiniSparkline({ data, trend, className = '' }: MiniSparklineProps) {
  const strokeColor = trend === 'up'
    ? '#10b981'
    : trend === 'down'
      ? '#f43f5e'
      : '#6b7280';

  const fillColor = trend === 'up'
    ? '#d1fae5'
    : trend === 'down'
      ? '#ffe4e6'
      : '#f3f4f6';

  return (
    <Sparkline
      data={data}
      width={60}
      height={20}
      strokeColor={strokeColor}
      fillColor={fillColor}
      strokeWidth={1.5}
      showArea={true}
      className={className}
    />
  );
}

// Generate mock 7-day trend data
export function generate7DayTrend(baseValue: number, volatility: number = 0.1): number[] {
  const data: number[] = [];
  let value = baseValue * (1 - volatility * 2);

  for (let i = 0; i < 7; i++) {
    const change = (Math.random() - 0.4) * volatility * baseValue;
    value = Math.max(0, value + change);
    data.push(value);
  }

  // Ensure last value is close to base value
  data[6] = baseValue;

  return data;
}
