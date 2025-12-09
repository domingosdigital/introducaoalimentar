import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { safetyTopics, cutsAndTextures, gagVsChoke, whatToDoInChoking } from "@/lib/data";
import { AlertTriangle, CheckCircle2, HelpCircle, Siren } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function SafetyPage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Guia de Segurança</h1>
        <p className="text-lg text-muted-foreground mt-1">Dicas essenciais para uma introdução alimentar segura.</p>
      </header>

      <div className="space-y-8">
        
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-3"><Siren/> O que fazer em caso de engasgo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base">
            <p className="text-destructive-foreground">{whatToDoInChoking.description}</p>
            <ol className="list-decimal list-inside space-y-2 text-destructive-foreground">
              {whatToDoInChoking.steps.map((step, index) => <li key={index}>{step}</li>)}
            </ol>
            <a href={whatToDoInChoking.link} target="_blank" rel="noopener noreferrer" className="text-destructive font-semibold underline">
              {whatToDoInChoking.linkText}
            </a>
          </CardContent>
        </Card>

        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">Texturas e Cortes Seguros</h2>
           <Accordion type="single" collapsible className="w-full space-y-4">
            {cutsAndTextures.map((item) => {
               const placeholder = PlaceHolderImages.find(p => p.id === item.imageId);
               return (
                <AccordionItem key={item.id} value={item.id} className="rounded-xl border bg-card shadow-sm">
                    <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline flex items-center gap-3">
                    {item.food}
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                            {placeholder && (
                                <Image
                                src={placeholder.imageUrl}
                                alt={`Corte seguro de ${item.food}`}
                                width={200}
                                height={200}
                                className="object-cover rounded-lg w-full"
                                data-ai-hint={placeholder.imageHint}
                                />
                            )}
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-foreground">6-8 meses:</h4>
                                    <p>{item.cut_6_8_months}</p>
                                </div>
                                 <div>
                                    <h4 className="font-semibold text-foreground">9-12 meses:</h4>
                                    <p>{item.cut_9_12_months}</p>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
               )
            })}
          </Accordion>
        </div>
        
        <div>
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary flex items-center gap-2"><HelpCircle />Reações Comuns x Reações de Alerta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600 flex items-center gap-2"><CheckCircle2 /> Reações Normais</CardTitle>
                        <CardDescription>São esperadas e fazem parte do aprendizado.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                             {gagVsChoke.normalReactions.map((reaction, i) => <li key={i}>{reaction}</li>)}
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle /> Reações de Alerta</CardTitle>
                        <CardDescription>Procure ajuda médica se observar estes sinais.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            {gagVsChoke.alertReactions.map((reaction, i) => <li key={i}>{reaction}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
