'use client';
import { Baby, History, Info, NotebookText } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { href: '/today', label: 'Sugestão do Dia', icon: Baby, color: 'bg-sky-100 text-sky-700' },
  { href: '/recipes', label: 'Receitas', icon: NotebookText, color: 'bg-amber-100 text-amber-700' },
  { href: '/history', label: 'Histórico', icon: History, color: 'bg-teal-100 text-teal-700' },
  { href: '/guide', label: 'Guia Rápido', icon: Info, color: 'bg-violet-100 text-violet-700' },
];

export default function WelcomePage() {
  const userName = "Mamãe"; // Placeholder for user name

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-background p-6">
      <header className="mb-10">
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Olá, <span className="text-primary">{userName}</span>!
        </h1>
        <p className="text-muted-foreground">O que vamos explorar hoje?</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${item.color}`}>
                <item.icon className="h-7 w-7" />
              </div>
              <span className="font-semibold text-foreground">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
