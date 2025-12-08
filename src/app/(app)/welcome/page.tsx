'use client';

import { Baby, Bookmark, Heart, Info, Lightbulb, NotebookText, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const mainCards = [
  {
    href: '/today',
    label: 'Sugestão do Dia',
    description: 'Um plano completo para as refeições de hoje.',
    icon: Sparkles,
    color: 'text-sky-600',
    bgColor: 'bg-sky-100/80',
    highlight: true,
  },
  {
    href: '/recipes',
    label: 'Receitas',
    description: 'Explore pratos por idade e refeição.',
    icon: NotebookText,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100/80',
    highlight: false,
  },
  {
    href: '/guide',
    label: 'Guia da Mamãe',
    description: 'Respostas para suas principais dúvidas.',
    icon: Info,
    color: 'text-violet-600',
    bgColor: 'bg-violet-100/80',
    highlight: false,
  },
];

const quickTip = "Dica rápida: uma massagem de 2 minutos na barriguinha ajuda a aliviar os gases antes das refeições.";

const userName = 'Mamãe';

export default function WelcomePage() {

  const highlightedCard = mainCards.find(c => c.highlight);
  const otherCards = mainCards.filter(c => !c.highlight);

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-muted/50 p-6 sm:p-8 space-y-6">
      <header className="text-left">
        <h1 className="font-headline text-3xl font-bold text-foreground tracking-tight">
          Olá, <span className="text-primary">{userName}</span>!
        </h1>
        <p className="text-lg text-muted-foreground mt-1">O que vamos explorar hoje?</p>
      </header>

      <div className="space-y-6">
        
        {/* Card de Destaque */}
        {highlightedCard && (
            <Link href={highlightedCard.href} className="group block">
                <Card className="shadow-sm hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${highlightedCard.bgColor} transition-colors group-hover:bg-primary/20`}>
                            <highlightedCard.icon className={`h-6 w-6 ${highlightedCard.color} transition-colors group-hover:text-primary`} />
                        </div>
                        <div>
                            <CardTitle className="font-headline text-xl">{highlightedCard.label}</CardTitle>
                            <CardDescription className="text-sm">{highlightedCard.description}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        )}
        
        {/* Outros Cards Principais */}
        <div className="grid grid-cols-2 gap-4">
          {otherCards.map((item) => (
            <Link href={item.href} key={item.href} className="group">
              <div className="flex aspect-video flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${item.bgColor} transition-colors group-hover:bg-primary/20`}
                >
                  <item.icon className={`h-7 w-7 ${item.color} transition-colors group-hover:text-primary`} />
                </div>
                <span className="font-semibold text-foreground text-sm leading-tight">{item.label}</span>
                 <p className="text-xs text-muted-foreground mt-1 px-2">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Fases e Comportamentos */}
        <Link href="/phases" className="group block">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                     <Baby className="h-6 w-6 text-foreground/70" />
                     <div>
                        <CardTitle className="text-lg font-semibold">Fases e comportamentos do bebê</CardTitle>
                        <CardDescription className="text-sm">Entenda cada etapa do desenvolvimento.</CardDescription>
                     </div>
                </CardHeader>
            </Card>
        </Link>

        {/* Dica Rápida */}
         <Card className="bg-accent border-accent-foreground/20 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="h-6 w-6 text-accent-foreground" />
                <p className="text-sm text-accent-foreground font-medium">{quickTip}</p>
            </CardHeader>
        </Card>

        {/* Favoritos */}
        <Link href="/favorites" className="group block">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                     <Star className="h-6 w-6 text-foreground/70" />
                     <div>
                        <CardTitle className="text-lg font-semibold">Minhas Receitas Favoritas</CardTitle>
                        <CardDescription className="text-sm">Acesse suas receitas salvas.</CardDescription>
                     </div>
                </CardHeader>
            </Card>
        </Link>
        
        {/* Mensagem Emocional */}
        <div className="text-center py-4">
            <p className="text-muted-foreground flex items-center justify-center gap-2">Respira, você está indo muito bem <Heart className="h-4 w-4 text-primary fill-primary" /></p>
        </div>

      </div>
    </div>
  );
}
