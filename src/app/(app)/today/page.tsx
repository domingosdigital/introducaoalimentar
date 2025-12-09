'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dailyMealPlans, ageBasedVariations } from "@/lib/data";
import { Coffee, Grape, Soup, Fish, ToyBrick, RefreshCw, Star, Clock, AlertCircle, Scissors } from "lucide-react";
import type { DailyMealPlan } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const mealIcons = {
  'Café da Manhã': <Coffee className="h-6 w-6 text-amber-600" />,
  'Lanche da Manhã': <Grape className="h-6 w-6 text-purple-600" />,
  'Almoço': <Soup className="h-6 w-6 text-green-600" />,
  'Lanche da Tarde': <ToyBrick className="h-6 w-6 text-blue-600" />,
  'Jantar': <Fish className="h-6 w-6 text-indigo-600" />,
};

const getRandomPlan = (): DailyMealPlan => {
  return dailyMealPlans[Math.floor(Math.random() * dailyMealPlans.length)];
};

const getTodaysPlan = (): DailyMealPlan => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dailyMealPlans[dayOfYear % dailyMealPlans.length];
};

export default function TodayPage() {
  const [plan, setPlan] = useState<DailyMealPlan | null>(null);

  useEffect(() => {
    setPlan(getTodaysPlan());
  }, []);

  const handleNewPlan = () => {
    setPlan(getRandomPlan());
  };

  const getRiskVariant = (risk?: 'Baixo' | 'Médio' | 'Alto') => {
    switch (risk) {
      case 'Alto': return 'destructive';
      case 'Médio': return 'secondary';
      default: return 'default';
    }
  };
  
  if (!plan) {
    return (
      <div className="flex animate-in fade-in flex-col gap-8 p-6 sm:p-8">
        <p>Carregando sugestões...</p>
      </div>
    );
  }

  const meals = Object.entries(plan.meals);

  return (
    <div className="flex animate-in fade-in flex-col gap-8 p-6 sm:p-8">
      <header>
        <h1 className="font-headline text-4xl font-bold text-foreground">Plano do Dia</h1>
        <p className="text-lg text-muted-foreground mt-1">Sugestões de refeições para seu bebê.</p>
      </header>

      <div className="space-y-6">
        {meals.map(([mealName, suggestion]) => {
          const variation = ageBasedVariations[suggestion.foodName];
          return (
            <Card key={mealName} className="shadow-sm">
              <CardHeader className="flex flex-row items-start gap-4">
                {mealIcons[mealName as keyof typeof mealIcons]}
                <div className='flex-1'>
                  <CardTitle className="text-xl font-semibold">{mealName}</CardTitle>
                  <CardDescription className="text-base font-bold text-primary">{suggestion.foodName}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Preparo: {suggestion.prepTime}</span>
                    </div>
                    {suggestion.allergyRisk &&
                        <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-muted-foreground" />
                            <span>Risco: <Badge variant={getRiskVariant(suggestion.allergyRisk)} className='text-xs'>{suggestion.allergyRisk}</Badge></span>
                        </div>
                    }
                    <div className="flex items-start gap-2 col-span-2">
                        <Scissors className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span><span className='font-semibold'>Textura/Corte:</span> {suggestion.texture}</span>
                    </div>
                </div>

                {variation && (
                   <div className="space-y-3 pt-2">
                     <h4 className="font-semibold text-foreground">Variações por idade:</h4>
                     <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                        {Object.entries(variation).map(([age, text]) => (
                            <li key={age}><strong>{age}:</strong> {text}</li>
                        ))}
                     </ul>
                   </div>
                )}
                
                {suggestion.tip && (
                  <div className="flex items-center gap-3 pt-2">
                    <Star className="h-5 w-5 text-amber-500" />
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">Dica:</span> {suggestion.tip}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="pb-4">
          <Button size="lg" variant="outline" className="w-full bg-background h-12 text-base" onClick={handleNewPlan}>
            <RefreshCw className="mr-2 h-5 w-5"/>
            Gerar Novo Plano
          </Button>
      </div>
    </div>
  );
}

