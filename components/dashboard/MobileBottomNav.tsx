'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Wallet,
  Building2,
  Plus,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Home' },
  { href: '/dashboard/quotes', icon: FileText, label: 'Quotes' },
  { href: '/dashboard/finance', icon: Wallet, label: 'Finance' },
];

interface MobileBottomNavProps {
  onQuickAction?: () => void;
}

export default function MobileBottomNav({ onQuickAction }: MobileBottomNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-full gap-0.5 ${
                active ? 'text-sky-600' : 'text-gray-500'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Quick Action Button */}
        {onQuickAction && (
          <button
            onClick={onQuickAction}
            className="flex items-center justify-center w-14 h-14 -mt-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg active:scale-95 transition-transform"
          >
            <Plus className="w-6 h-6" />
          </button>
        )}

        {navItems.slice(2).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-full gap-0.5 ${
                active ? 'text-sky-600' : 'text-gray-500'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
