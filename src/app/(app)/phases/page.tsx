'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { evolutionTopics } from "@/lib/data";
import {CheckCircle2} from "lucide-react";
import React from 'react';

const EvolutionContent = ({ content }: { content: { title: string; items: string[] }[] }) => (
    <div className="space-y-4">
        {content.map((section, index) => (
             <div key={index} className="space-y-3">
                <h3 className="font-semibold text-base text-foreground">{section.title}</h3>
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
);


export default function PhasesPage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Evolução do Bebê (4 a 12 meses)</h1>
        <p className="text-lg text-muted-foreground mt-1">Entenda os marcos do desenvolvimento e da alimentação do seu bebê.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {evolutionTopics.sort((a,b) => parseFloat(a.id) - parseFloat(b.id)).map((topic) => (
          <AccordionItem key={topic.id} value={topic.id} className="rounded-xl border bg-card shadow-sm">
            <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline">
              {topic.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
              <EvolutionContent content={topic.content} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
