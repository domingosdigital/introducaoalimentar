'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dailySuggestions } from "@/lib/data";
import { ChefHat, Check, ChevronDown, ChevronUp, RefreshCw } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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
  const [isPreparationOpen, setIsPreparationOpen] = useState(false);
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
      <div className="flex animate-in fade-in flex-col gap-8 p-4 sm:p-6">
        <p>Carregando sugestão...</p>
      </div>
    );
  }

  return (
    <div className="flex animate-in fade-in flex-col gap-8 p-4 sm:p-6">
      <header>
        <h1 className="font-headline text-3xl font-bold text-foreground">Hoje</h1>
        <p className="text-muted-foreground">Sugestão do dia para o seu bebê</p>
      </header>

      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-primary">
          <CardTitle className="font-headline text-4xl text-primary-foreground">{suggestion.foodName}</CardTitle>
          <CardDescription className="text-primary-foreground/80">Textura recomendada: <span className="font-bold">{suggestion.texture}</span></CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Collapsible open={isPreparationOpen} onOpenChange={setIsPreparationOpen}>
            <CollapsibleTrigger asChild>
               <div className="flex cursor-pointer items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <ChefHat className="h-6 w-6 text-accent"/>
                  <span className="text-lg font-semibold text-foreground">Como preparar</span>
                </div>
                <Button variant="ghost" size="sm">
                  {isPreparationOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6 text-base text-muted-foreground">
                {suggestion.preparation}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        <CardFooter className="flex-col gap-4 bg-muted/50 p-6">
          <Button size="lg" className="w-full" onClick={handleRegister}>
            <Check className="mr-2 h-5 w-5"/>
            Registrar que experimentou
          </Button>
          <Button size="lg" variant="outline" className="w-full bg-background" onClick={handleNewSuggestion}>
            <RefreshCw className="mr-2 h-5 w-5"/>
            Gerar outra sugestão
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
