'use client';
import { Baby, History, Info, NotebookText, Utensils } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { href: '/today', label: 'Sugestão do Dia', icon: Baby, color: 'text-sky-600', bgColor: 'bg-sky-100' },
  { href: '/recipes', label: 'Receitas', icon: NotebookText, color: 'text-amber-600', bgColor: 'bg-amber-100' },
  { href: '/history', label: 'Histórico', icon: History, color: 'text-teal-600', bgColor: 'bg-teal-100' },
  { href: '/guide', label: 'Guia Rápido', icon: Info, color: 'text-violet-600', bgColor: 'bg-violet-100' },
];

export default function WelcomePage() {
  const userName = "Mamãe"; 

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-background p-6 sm:p-8 space-y-8">
      <header className="text-center mt-8 mb-4">
        <h1 className="font-headline text-4xl font-bold text-foreground tracking-tight">
          Olá, <span className="text-primary">{userName}</span>!
        </h1>
        <p className="text-lg text-muted-foreground mt-2">O que vamos explorar hoje?</p>
      </header>

      <div className="grid grid-cols-2 gap-5">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-accent">
              <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full ${item.bgColor}`}>
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <span className="font-semibold text-foreground text-base">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
