import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { safetyTopics } from "@/lib/data";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Guia de Segurança</h1>
        <p className="text-lg text-muted-foreground mt-1">Dicas essenciais para uma introdução alimentar segura.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {safetyTopics.map((topic) => (
          <AccordionItem key={topic.id} value={topic.id} className="rounded-xl border bg-card shadow-sm">
            <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline flex items-center gap-3">
               <AlertTriangle className="h-6 w-6 text-destructive" /> {topic.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
              {typeof topic.content === 'string' ? (
                <p>{topic.content}</p>
              ) : (
                <div className="space-y-4">
                  {topic.content.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                           <li key={itemIndex} className="flex items-start gap-2">
                             <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
