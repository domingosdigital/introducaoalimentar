'use client';

import { Baby, History, Info, NotebookText, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { BiaAssistant } from '@/components/bia-assistant';

const menuItems = [
  {
    href: '/today',
    label: 'Sugestão do Dia',
    icon: Sparkles,
    color: 'text-sky-600',
    bgColor: 'bg-sky-100/80',
  },
  {
    href: '/recipes',
    label: 'Receitas',
    icon: NotebookText,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100/80',
  },
  {
    href: '/history',
    label: 'Histórico',
    icon: History,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100/80',
  },
  {
    href: '/guide',
    label: 'Guia Rápido',
    icon: Info,
    color: 'text-violet-600',
    bgColor: 'bg-violet-100/80',
  },
];

export default function WelcomePage() {
  const userName = 'Mamãe';

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-background p-6 sm:p-8 space-y-8">
      <header className="text-center mt-4">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
                 <Baby className="h-10 w-10 text-primary" />
            </div>
        </div>
        <h1 className="font-headline text-3xl font-bold text-foreground tracking-tight">
          Olá, <span className="text-primary">{userName}</span>!
        </h1>
        <p className="text-lg text-muted-foreground mt-1">O que vamos explorar hoje?</p>
      </header>

      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.href} className="group">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-card">
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${item.bgColor} transition-colors group-hover:bg-primary/20`}
                >
                  <item.icon className={`h-7 w-7 ${item.color} transition-colors group-hover:text-primary`} />
                </div>
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <BiaAssistant />

      </div>
    </div>
  );
}
