'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, NotebookText, History, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/today', label: 'Hoje', icon: Home },
  { href: '/recipes', label: 'Receitas', icon: NotebookText },
  { href: '/history', label: 'Histórico', icon: History },
  { href: '/guide', label: 'Guia', icon: Info },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 mt-auto border-t bg-card">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                isActive && 'text-accent'
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
