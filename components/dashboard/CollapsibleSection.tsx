'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  badge?: string | number;
  className?: string;
  headerClassName?: string;
  mobileOnly?: boolean;
}

export default function CollapsibleSection({
  title,
  icon,
  children,
  defaultExpanded = true,
  badge,
  className = '',
  headerClassName = '',
  mobileOnly = true,
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [height, setHeight] = useState<number | 'auto'>('auto');
  const contentRef = useRef<HTMLDivElement>(null);

  // Measure content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (isExpanded) {
            setHeight(entry.contentRect.height);
          }
        }
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isExpanded]);

  // Update height when expanded state changes
  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // If mobileOnly, render without collapsible behavior on desktop
  if (mobileOnly) {
    return (
      <div className={className}>
        {/* Mobile: Collapsible */}
        <div className="lg:hidden">
          <button
            onClick={toggleExpanded}
            className={`w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm ${headerClassName}`}
          >
            <div className="flex items-center gap-2">
              {icon && <span className="text-gray-500">{icon}</span>}
              <span className="font-medium text-gray-900">{title}</span>
              {badge !== undefined && (
                <span className="px-2 py-0.5 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
                  {badge}
                </span>
              )}
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ height: isExpanded ? height : 0 }}
          >
            <div ref={contentRef} className="pt-3">
              {children}
            </div>
          </div>
        </div>

        {/* Desktop: Always visible */}
        <div className="hidden lg:block">{children}</div>
      </div>
    );
  }

  // Non-mobileOnly: Always collapsible
  return (
    <div className={className}>
      <button
        onClick={toggleExpanded}
        className={`w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors ${headerClassName}`}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span className="font-medium text-gray-900">{title}</span>
          {badge !== undefined && (
            <span className="px-2 py-0.5 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isExpanded ? height : 0 }}
      >
        <div ref={contentRef} className="pt-3">
          {children}
        </div>
      </div>
    </div>
  );
}

// Accordion component for multiple collapsible sections where only one can be open
interface AccordionProps {
  children: React.ReactElement<CollapsibleSectionProps>[];
  defaultOpenIndex?: number;
  className?: string;
}

export function Accordion({
  children,
  defaultOpenIndex = 0,
  className = '',
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={`space-y-2 ${className}`}>
      {children.map((child, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{child.props.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-3">{child.props.children}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
