'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { phaseTopics } from "@/lib/data";
import {CheckCircle2} from "lucide-react";
import React from 'react';

const PhaseContent = ({ content }: { content: { behaviors: string[], tips: string[] } }) => (
    <div className="space-y-4">
        <div className="space-y-3">
            <h3 className="font-semibold text-base text-foreground">Comportamentos Comuns:</h3>
            <ul className="space-y-2">
                {content.behaviors.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="space-y-3">
            <h3 className="font-semibold text-base text-foreground">Como Ajudar e o Que Esperar:</h3>
            <ul className="space-y-2">
                {content.tips.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


export default function PhasesPage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Fases e Comportamentos</h1>
        <p className="text-lg text-muted-foreground mt-1">Entenda os marcos do desenvolvimento do seu bebê.</p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {phaseTopics.sort((a,b) => parseFloat(a.id) - parseFloat(b.id)).map((topic) => (
          <AccordionItem key={topic.id} value={topic.id} className="rounded-xl border bg-card shadow-sm">
            <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline">
              {topic.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
              <PhaseContent content={topic.content} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
