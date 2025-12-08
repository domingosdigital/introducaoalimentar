'use client';
import { useFoodChecklist } from '@/hooks/use-food-checklist';
import { foodChecklist } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Check, PackageOpen } from 'lucide-react';

export default function ChecklistPage() {
  const { isChecked, toggleItem, testedCount, missingCount } = useFoodChecklist();

  const categories = ['Fruta', 'Legume', 'Proteína', 'Grão', 'Outro'];

  return (
    <div className="animate-in fade-in p-6 sm:p-8 space-y-6">
      <header className="mb-2">
        <h1 className="font-headline text-4xl font-bold text-foreground">Checklist de Alimentos</h1>
        <p className="text-lg text-muted-foreground mt-1">Acompanhe os alimentos que seu bebê já experimentou.</p>
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

      <div className="space-y-6">
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
