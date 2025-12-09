'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dailyMealPlans } from "@/lib/data";
import { Coffee, Grape, Soup, Fish, ToyBrick, RefreshCw } from "lucide-react";
import type { DailyMealPlan } from '@/lib/types';

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

      <div className="space-y-4">
        {meals.map(([mealName, suggestion]) => {
          return (
            <Card key={mealName} className="shadow-sm">
              <CardHeader className="flex-row items-center gap-4">
                {mealIcons[mealName as keyof typeof mealIcons]}
                <div className="flex-1">
                  <CardTitle className="text-xl font-semibold">{mealName}</CardTitle>
                  <p className="text-base text-primary font-bold">{suggestion.foodName}</p>
                </div>
              </CardHeader>
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
