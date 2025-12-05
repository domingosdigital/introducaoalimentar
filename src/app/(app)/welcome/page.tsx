'use client';
import { useState, useEffect } from 'react';
import { Baby, History, Info, NotebookText } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconLiked, IconDisliked, IconStrange, IconNone } from '@/components/icons';
import { cn } from '@/lib/utils';
import { dailySuggestions } from '@/lib/data';
import type { DailySuggestion, Reaction } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const menuItems = [
  { href: '/today', label: 'Sugestão do Dia', icon: Baby, color: 'bg-sky-100 text-sky-700' },
  { href: '/recipes', label: 'Receitas', icon: NotebookText, color: 'bg-amber-100 text-amber-700' },
  { href: '/history', label: 'Histórico', icon: History, color: 'bg-teal-100 text-teal-700' },
  { href: '/guide', label: 'Guia Rápido', icon: Info, color: 'bg-violet-100 text-violet-700' },
];

const reactionTypes: { id: Reaction; label: string; icon: React.FC<any> }[] = [
    { id: 'liked', label: 'Gostou', icon: IconLiked },
    { id: 'disliked', label: 'Não Gostou', icon: IconDisliked },
    { id: 'strange', label: 'Achou Estranho', icon: IconStrange },
    { id: 'none', label: 'Sem Reação', icon: IconNone },
];

const getTodaysSuggestion = (): DailySuggestion => {
  // Simple logic to get a suggestion based on the day of the year
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dailySuggestions[dayOfYear % dailySuggestions.length];
};

export default function WelcomePage() {
  const { toast } = useToast();
  const userName = "Mamãe"; // Placeholder for user name
  const [suggestion, setSuggestion] = useState<DailySuggestion | null>(null);
  const [selectedReaction, setSelectedReaction] = useState<Reaction | null>(null);

  useEffect(() => {
    setSuggestion(getTodaysSuggestion());
  }, []);

  const handleSaveReaction = () => {
    if (selectedReaction && suggestion) {
      toast({
        title: 'Reação salva!',
        description: `A reação para ${suggestion.foodName} foi registrada.`,
      });
      // Here you would typically save the reaction to your backend/database
      console.log({
        food: suggestion.foodName,
        reaction: selectedReaction,
        date: new Date().toISOString(),
      });
    } else {
       toast({
        title: 'Ops!',
        description: `Por favor, selecione uma reação antes de salvar.`,
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-background p-6 space-y-8">
      <header>
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
      
      {suggestion && (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Registro de hoje</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                 <p className="text-muted-foreground">Como foi a experiência com <span className="font-bold text-foreground">{suggestion.foodName}</span>?</p>
                <div className="flex justify-around items-center pt-2">
                    {reactionTypes.map((reaction) => (
                        <div key={reaction.id} className="flex flex-col items-center gap-2">
                            <button 
                                onClick={() => setSelectedReaction(reaction.id)}
                                className={cn(
                                    "flex items-center justify-center h-14 w-14 rounded-full border-2 transition-all",
                                    selectedReaction === reaction.id 
                                        ? 'bg-primary/20 border-primary' 
                                        : 'bg-card border-border'
                                )}
                                >
                                <reaction.icon className={cn(
                                    "h-8 w-8",
                                     selectedReaction === reaction.id 
                                        ? 'text-primary' 
                                        : 'text-muted-foreground'
                                )} />
                            </button>
                             <span className="text-xs text-muted-foreground">{reaction.label}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={handleSaveReaction}>Salvar Reação</Button>
            </CardFooter>
        </Card>
      )}
    </div>
  );
}
