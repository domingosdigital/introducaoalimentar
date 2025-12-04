'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dailySuggestion } from "@/lib/data";
import { ChefHat, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useToast } from '@/hooks/use-toast';

export default function TodayPage() {
  const { toast } = useToast();
  const [isPreparationOpen, setIsPreparationOpen] = useState(false);

  const handleRegister = () => {
    toast({
      title: "Registrado!",
      description: `${dailySuggestion.foodName} foi marcado como experimentado.`,
    });
  };
  
  return (
    <div className="flex animate-in fade-in flex-col gap-8 p-4 sm:p-6">
      <header>
        <h1 className="font-headline text-3xl font-bold text-foreground">Hoje</h1>
        <p className="text-muted-foreground">Sugestão do dia para o seu bebê</p>
      </header>

      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-primary/20">
          <CardTitle className="font-headline text-4xl text-primary-foreground/90">{dailySuggestion.foodName}</CardTitle>
          <CardDescription className="text-primary-foreground/70">Textura recomendada: <span className="font-bold">{dailySuggestion.texture}</span></CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Collapsible open={isPreparationOpen} onOpenChange={setIsPreparationOpen}>
            <CollapsibleTrigger asChild>
               <div className="flex cursor-pointer items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <ChefHat className="h-6 w-6 text-accent"/>
                  <span className="text-lg font-semibold text-foreground">Como preparar</span>
                </div>
                <Button variant="ghost" size="sm">
                  {isPreparationOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6 text-base text-muted-foreground">
                {dailySuggestion.preparation}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        <CardFooter className="bg-muted/50 p-6">
          <Button size="lg" className="w-full" onClick={handleRegister}>
            <Check className="mr-2 h-5 w-5"/>
            Registrar que experimentou
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
