import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { guideTopics } from "@/lib/data";

export default function GuidePage() {
  return (
    <div className="animate-in fade-in p-4 sm:p-6">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold text-foreground">Guia Rápido</h1>
        <p className="text-muted-foreground">Respostas para suas principais dúvidas.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {guideTopics.map((topic) => (
          <AccordionItem key={topic.id} value={topic.id} className="rounded-lg border bg-card shadow-sm">
            <AccordionTrigger className="p-6 text-left font-semibold hover:no-underline">
              {topic.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-muted-foreground">
              {topic.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
