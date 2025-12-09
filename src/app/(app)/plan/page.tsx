'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { firstWeeksPlan } from '@/lib/data';
import { Leaf, Carrot, Apple, Clock, AlertCircle, Sparkles } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { useFoodChecklist } from '@/hooks/use-food-checklist';
import { Badge } from '@/components/ui/badge';

export default function PlanPage() {
  const { isChecked, toggleItem } = useFoodChecklist();

  const getRiskVariant = (risk: 'Baixo' | 'Médio' | 'Alto') => {
    switch (risk) {
      case 'Alto':
        return 'destructive';
      case 'Médio':
        return 'secondary';
      default:
        return 'default';
    }
  };

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
              <CardDescription className='font-headline text-lg text-foreground !mt-2'>{dayPlan.food}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Preparo: {dayPlan.prepTime}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        <span>Risco Alergia: <Badge variant={getRiskVariant(dayPlan.allergyRisk)} className='text-xs'>{dayPlan.allergyRisk}</Badge></span>
                    </div>
                </div>

              <div className="flex items-center gap-3">
                <Carrot className="h-5 w-5 text-orange-500" />
                <p><span className="font-semibold text-foreground">Textura e Corte:</span> {dayPlan.textureAndCut}</p>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <p><span className="font-semibold text-foreground">Dica Prática:</span> {dayPlan.tip}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
