'use client';

import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeableCardProps {
  children: React.ReactNode[];
  className?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
}

export default function SwipeableCard({
  children,
  className = '',
  showIndicators = true,
  showArrows = false,
}: SwipeableCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;

  // Minimum swipe distance to trigger navigation (in pixels)
  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);

    // Calculate drag offset for visual feedback
    const diff = currentTouch - touchStart;
    // Limit drag offset to prevent over-scrolling
    const maxOffset = 100;
    const limitedDiff = Math.max(-maxOffset, Math.min(maxOffset, diff));
    setDragOffset(limitedDiff);
  }, [touchStart]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setDragOffset(0);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < totalItems - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, currentIndex, totalItems]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Swipeable container */}
      <div
        ref={containerRef}
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
            transition: isDragging ? 'none' : 'transform 300ms ease-out',
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-1"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (optional, useful for desktop) */}
      {showArrows && totalItems > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === totalItems - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity ${
              currentIndex === totalItems - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
            }`}
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showIndicators && totalItems > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-sky-500 w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Hook for detecting mobile viewport
export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  // Check on mount and window resize
  if (typeof window !== 'undefined') {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);

    // Initial check
    if (!isMobile && window.innerWidth < breakpoint) {
      setIsMobile(true);
    }

    // Add resize listener
    window.addEventListener('resize', checkMobile);
  }

  return isMobile;
}
