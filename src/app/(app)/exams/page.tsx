'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { useExamChecklist } from '@/hooks/use-exam-checklist';
import { examChecklist } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ExamsPage() {
  const { isChecked, toggleItem } = useExamChecklist();

  return (
    <div className="animate-in fade-in p-6 sm:p-8 space-y-6">
      <header className="mb-2">
        <h1 className="font-headline text-4xl font-bold text-foreground">Exames Importantes</h1>
        <p className="text-lg text-muted-foreground mt-1">Acompanhe os exames essenciais para a saúde do seu bebê no primeiro ano.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {examChecklist.map(exam => (
          <AccordionItem key={exam.id} value={exam.id} className="rounded-xl border bg-card shadow-sm">
            <AccordionTrigger className="p-4 text-left font-semibold hover:no-underline text-lg">
              <div className="flex items-center gap-4 flex-1">
                <Checkbox
                  id={exam.id}
                  checked={isChecked(exam.id)}
                  onCheckedChange={(e) => {
                    e.stopPropagation();
                    toggleItem(exam.id);
                  }}
                  className="h-6 w-6"
                />
                <div className="flex-1 text-left">
                  <p className={cn(
                    "font-semibold",
                     isChecked(exam.id) ? "text-green-700" : "text-foreground"
                  )}>
                    {exam.name}
                  </p>
                  <p className="text-sm font-normal text-muted-foreground">{exam.when}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-2 text-base text-muted-foreground leading-relaxed space-y-4">
              <p>{exam.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
