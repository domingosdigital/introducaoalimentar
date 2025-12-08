'use client';

import { useState } from 'react';
import { Bot, Loader2, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { askBia } from '@/ai/flows/ask-bia-flow';

export default function AskBia() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setIsLoading(true);
    setResponse('');
    try {
      const result = await askBia({ question });
      setResponse(result.answer);
    } catch (error) {
      console.error('Error asking Bia:', error);
      setResponse('Desculpe, não consegui processar sua pergunta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-xl text-primary">
          <Bot />
          Pergunte para a Bia
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex: Como faço o mingau de aveia?"
            disabled={isLoading}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          />
          <Button onClick={handleAsk} disabled={isLoading} size="icon">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </div>
        { (isLoading || response) && (
            <div className="p-4 bg-muted/80 rounded-lg text-sm text-foreground min-h-16 flex items-center">
                {isLoading ? (
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Bia está pensando...</span>
                    </div>
                ) : (
                    <p className="whitespace-pre-wrap">{response}</p>
                )}
            </div>
        )}
      </CardContent>
    </Card>
  );
}
