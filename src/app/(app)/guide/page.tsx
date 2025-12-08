import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { guideTopics } from "@/lib/data";

export default function GuidePage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Guia da Mamãe</h1>
        <p className="text-lg text-muted-foreground mt-1">Respostas para suas principais dúvidas.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {guideTopics.sort((a,b) => parseFloat(a.id) - parseFloat(b.id)).map((topic) => (
          <AccordionItem key={topic.id} value={topic.id} className="rounded-xl border bg-card shadow-sm">
            <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline">
              {topic.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
              {topic.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
