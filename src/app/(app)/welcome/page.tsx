'use client';

import { Baby, Heart, NotebookText, Star, CheckSquare, CalendarDays, Clock, ShieldCheck, CalendarHeart, BookHeart, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { quickTips } from '@/lib/data';
import { useState, useEffect } from 'react';

const mainCards = [
  {
    href: '/recipes',
    label: 'Receitas',
    description: 'Explore pratos por idade e refeição.',
    icon: NotebookText,
    highlight: true,
  },
  {
    href: '/today',
    label: 'Sugestão do Dia',
    description: 'Um plano de refeições para hoje.',
    icon: CalendarHeart,
    highlight: true,
  },
];

const featureCards = [
    {
    href: '/guide',
    label: 'Primeiros Passos',
    description: 'Respostas para suas dúvidas.',
    icon: BookHeart,
  },
  {
    href: '/phases',
    label: 'Evolução do Bebê',
    icon: Baby,
  },
  {
    href: '/checklist',
    label: 'Checklist de Alimentos',
    icon: NotebookText,
  },
  {
    href: '/plan',
    label: 'Plano de 14 Dias',
    icon: CalendarDays,
  },
  {
    href: '/safety',
    label: 'Guia de Segurança',
    icon: ShieldCheck,
  },
   {
    href: '/favorites',
    label: 'Favoritos',
    icon: Star,
  },
];

const getDailyTip = () => {
    const now = new Date();
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return quickTips[dayOfYear % quickTips.length];
};

const userName = 'Mamãe';

export default function WelcomePage() {
  const [quickTip, setQuickTip] = useState('');

  useEffect(() => {
    setQuickTip(getDailyTip());
  }, []);

  const highlightedCards = mainCards.filter(c => c.highlight);

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-muted/50 p-6 sm:p-8 space-y-6">

      <div className="space-y-6">
        
        <header className="text-left">
          <h1 className="font-headline text-3xl font-bold text-foreground tracking-tight">
            Olá, <span className="text-primary">{userName}</span>!
          </h1>
        </header>

         <div className="text-center">
          <h1 className="text-xl font-bold font-headline text-foreground leading-tight">
            A introdução alimentar do seu bebê<br/>sem medo e sem dúvidas.
          </h1>
          <h2 className="text-base text-muted-foreground mt-2">Passo a passo simples, seguro e criado para acompanhar cada fase do seu bebê.</h2>
        </div>
        
        <div className="space-y-4">
            {highlightedCards.map((card) => (
                <Link href={card.href} key={card.href} className="group block">
                    <Card className="shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20`}>
                                <card.icon className={`h-6 w-6 text-primary transition-colors group-hover:text-primary`} />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{card.label}</CardTitle>
                                <CardDescription className="text-sm">{card.description}</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {featureCards.map((item) => (
            <Link href={item.href} key={item.href} className="group">
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20`}
                >
                  <item.icon className={`h-7 w-7 text-primary transition-colors group-hover:text-primary`} />
                </div>
                <span className="font-semibold text-foreground text-sm leading-tight">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
        
         <Card className="bg-accent border-accent-foreground/20 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="h-6 w-6 text-accent-foreground" />
                <p className="text-sm text-accent-foreground font-medium">{quickTip}</p>
            </CardHeader>
        </Card>
        
        <div className="text-center py-4">
            <p className="text-muted-foreground flex items-center justify-center gap-2">Respira, você está indo muito bem <Heart className="h-4 w-4 text-primary fill-primary" /></p>
        </div>

      </div>
    </div>
  );
}
