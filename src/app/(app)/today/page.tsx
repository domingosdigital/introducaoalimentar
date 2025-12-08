'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dailySuggestions } from "@/lib/data";
import { ChefHat, Check, RefreshCw } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import type { DailySuggestion } from '@/lib/types';

const getRandomSuggestion = (): DailySuggestion => {
  return dailySuggestions[Math.floor(Math.random() * dailySuggestions.length)];
};

const getTodaysSuggestion = (): DailySuggestion => {
  // Simple logic to get a suggestion based on the day of the year
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dailySuggestions[dayOfYear % dailySuggestions.length];
};

export default function TodayPage() {
  const { toast } = useToast();
  const [suggestion, setSuggestion] = useState<DailySuggestion | null>(null);

  useEffect(() => {
    setSuggestion(getTodaysSuggestion());
  }, []);

  const handleNewSuggestion = () => {
    setSuggestion(getRandomSuggestion());
  };

  const handleRegister = () => {
    if (!suggestion) return;
    toast({
      title: "Registrado!",
      description: `${suggestion.foodName} foi marcado como experimentado.`,
    });
  };
  
  if (!suggestion) {
    return (
      <div className="flex animate-in fade-in flex-col gap-8 p-6 sm:p-8">
        <p>Carregando sugestão...</p>
      </div>
    );
  }

  return (
    <div className="flex animate-in fade-in flex-col gap-8 p-6 sm:p-8">
      <header>
        <h1 className="font-headline text-4xl font-bold text-foreground">Sugestão do Dia</h1>
        <p className="text-lg text-muted-foreground mt-1">Uma nova ideia para o seu bebê</p>
      </header>

      <Card className="overflow-hidden shadow-lg border-primary/20">
        <CardHeader className="bg-primary/10 p-8">
          <CardTitle className="font-headline text-5xl font-bold text-primary text-center">{suggestion.foodName}</CardTitle>
          <CardDescription className="text-center text-primary/80 text-base pt-1">Textura recomendada: <span className="font-bold">{suggestion.texture}</span></CardDescription>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-2">
            <div className="flex items-center gap-3 mb-3">
                <ChefHat className="h-6 w-6 text-primary"/>
                <h2 className="text-xl font-semibold text-foreground">Como preparar</h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
                {suggestion.preparation}
            </p>
        </CardContent>
        <CardFooter className="flex-col gap-4 bg-muted/50 p-6 sm:p-8">
          <Button size="lg" className="w-full h-12 text-base" onClick={handleRegister}>
            <Check className="mr-2 h-5 w-5"/>
            Registrar que experimentou
          </Button>
          <Button size="lg" variant="outline" className="w-full bg-background h-12 text-base" onClick={handleNewSuggestion}>
            <RefreshCw className="mr-2 h-5 w-5"/>
            Nova Sugestão
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
