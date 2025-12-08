import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ageRoutines } from "@/lib/data";
import { Utensils, Clock, Smile, Star } from "lucide-react";

export default function RoutinePage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Rotina por Idade</h1>
        <p className="text-lg text-muted-foreground mt-1">Exemplos de rotinas alimentares para cada fase do bebê.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {ageRoutines.map((routine, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="rounded-xl border bg-card shadow-sm">
            <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline">
              {routine.age}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed space-y-4">
              <div className="flex items-start gap-3">
                <Utensils className="h-5 w-5 text-primary mt-1" />
                <p><span className="font-semibold text-foreground">Refeições:</span> {routine.meals}</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <p><span className="font-semibold text-foreground">Horários Sugeridos:</span> {routine.schedule}</p>
              </div>
              <div className="flex items-start gap-3">
                <Smile className="h-5 w-5 text-primary mt-1" />
                <p><span className="font-semibold text-foreground">Textura Recomendada:</span> {routine.texture}</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary mt-1" />
                <p><span className="font-semibold text-foreground">Exemplo do Dia:</span> {routine.example}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
