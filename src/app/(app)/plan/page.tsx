'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { firstWeeksPlan } from '@/lib/data';
import { Leaf, Carrot, Apple } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { useFoodChecklist } from '@/hooks/use-food-checklist'; // Re-using for simplicity

export default function PlanPage() {
  const { isChecked, toggleItem } = useFoodChecklist();

  return (
    <div className="animate-in fade-in p-6 sm:p-8 space-y-6">
      <header className="mb-4">
        <h1 className="font-headline text-4xl font-bold text-foreground">Plano das Primeiras 2 Semanas</h1>
        <p className="text-lg text-muted-foreground mt-1">Um guia simples para começar a introdução alimentar com tranquilidade.</p>
      </header>

      <div className="space-y-4">
        {firstWeeksPlan.map(dayPlan => (
          <Card key={dayPlan.day} className="shadow-sm">
            <CardHeader>
              <div className='flex justify-between items-center'>
                 <CardTitle className="text-xl font-bold text-primary">Dia {dayPlan.day}</CardTitle>
                 <div className="flex items-center space-x-2">
                    <Checkbox id={`day-${dayPlan.day}`} checked={isChecked(`day-${dayPlan.day}`)} onCheckedChange={() => toggleItem(`day-${dayPlan.day}`)} />
                    <label
                      htmlFor={`day-${dayPlan.day}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Concluído
                    </label>
                  </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Apple className="h-5 w-5 text-red-500" />
                <p><span className="font-semibold text-foreground">Fruta:</span> {dayPlan.fruit}</p>
              </div>
              <div className="flex items-center gap-3">
                <Carrot className="h-5 w-5 text-orange-500" />
                <p><span className="font-semibold text-foreground">Legume:</span> {dayPlan.vegetable}</p>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="h-5 w-5 text-green-500" />
                <p><span className="font-semibold text-foreground">Preparo:</span> {dayPlan.preparation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
