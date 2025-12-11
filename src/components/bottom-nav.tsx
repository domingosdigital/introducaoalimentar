'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, NotebookText, Sparkles, CalendarDays, Apple } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/welcome', label: 'Início', icon: Home },
  { href: '/recipes', label: 'Receitas', icon: NotebookText },
  { href: '/today', label: 'Cardápio', icon: Sparkles },
  { href: '/checklist', label: 'Checklist', icon: Apple },
  { href: '/plan', label: 'Plano', icon: CalendarDays },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 mt-auto border-t bg-card">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/welcome' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground w-1/5 text-center',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
