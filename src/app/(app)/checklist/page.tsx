'use client';
import { useFoodChecklist } from '@/hooks/use-food-checklist';
import { foodChecklist, allergenicFoods } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Check, PackageOpen, AlertTriangle, ShieldCheck, HeartPulse } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ChecklistPage() {
  const { isChecked, toggleItem, testedCount, missingCount } = useFoodChecklist();

  const categories = ['Fruta', 'Legume', 'Proteína', 'Grão'];

  return (
    <div className="animate-in fade-in p-6 sm:p-8 space-y-6">
      <header className="mb-2">
        <h1 className="font-headline text-4xl font-bold text-foreground">Checklist de Alimentos</h1>
        <p className="text-lg text-muted-foreground mt-1">Acompanhe os alimentos que seu bebê já experimentou e aprenda a introduzir alergênicos com segurança.</p>
      </header>

      <Card className="sticky top-4 z-10 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <Check className="h-6 w-6 text-green-600" />
              <span className="text-2xl font-bold text-foreground">{testedCount}</span>
              <span className="text-sm text-muted-foreground">Testados</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <PackageOpen className="h-6 w-6 text-amber-600" />
              <span className="text-2xl font-bold text-foreground">{missingCount}</span>
              <span className="text-sm text-muted-foreground">Faltando</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <div>
            <h2 className="font-headline text-2xl font-semibold mb-4 text-destructive flex items-center gap-2"><AlertTriangle /> Radar de Alergias</h2>
             <Accordion type="single" collapsible className="w-full space-y-4">
                {allergenicFoods.map(food => (
                     <AccordionItem key={food.id} value={food.id} className="rounded-xl border bg-card shadow-sm">
                        <AccordionTrigger className="p-4 text-left text-lg font-semibold hover:no-underline">
                             <div className="flex items-center gap-4 flex-1">
                                <Checkbox
                                id={food.id}
                                checked={isChecked(food.id)}
                                onCheckedChange={(e) => {
                                    e.stopPropagation();
                                    toggleItem(food.id);
                                }}
                                className="h-6 w-6"
                                />
                                <label
                                htmlFor={food.id}
                                className={cn(
                                    "text-base font-medium flex-1 cursor-pointer",
                                    isChecked(food.id) ? "text-green-700" : "text-destructive"
                                )}
                                >
                                {food.name}
                                </label>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-2 text-base text-muted-foreground leading-relaxed space-y-4">
                            <div>
                                <h3 className="font-semibold text-foreground flex items-center gap-2"><ShieldCheck size={18} /> Como introduzir com segurança:</h3>
                                <p className="mt-1">{food.introduction}</p>
                            </div>
                             <div>
                                <h3 className="font-semibold text-foreground flex items-center gap-2"><HeartPulse size={18} /> O que observar:</h3>
                                <p className="mt-1">{food.observation}</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>


        {categories.map(category => {
          const items = foodChecklist.filter(item => item.category === category);
          return (
            <div key={category}>
              <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">{category}s</h2>
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {items.map(item => (
                      <li key={item.id} className="p-4 flex items-center gap-4">
                        <Checkbox
                          id={item.id}
                          checked={isChecked(item.id)}
                          onCheckedChange={() => toggleItem(item.id)}
                          className="h-6 w-6"
                        />
                        <label
                          htmlFor={item.id}
                          className={cn(
                            "text-base font-medium flex-1 cursor-pointer",
                            isChecked(item.id) ? "text-green-700 line-through" : "text-amber-700"
                          )}
                        >
                          {item.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
