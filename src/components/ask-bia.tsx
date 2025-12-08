'use client';

import { useState } from 'react';
import { Sparkles, Bot, User, Loader } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { askBia } from '@/ai/flows/ask-bia-flow';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'bia';
  content: string;
};

export function AskBia() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion('');
    setIsLoading(true);

    try {
      const biaResponse = await askBia({ question });
      const biaMessage: Message = { role: 'bia', content: biaResponse };
      setMessages((prev) => [...prev, biaMessage]);
    } catch (error) {
      console.error('Erro ao chamar a Bia:', error);
      const errorMessage: Message = {
        role: 'bia',
        content: 'Desculpe, não consegui processar sua pergunta. Tente novamente.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-2">
            <div className="bg-primary/10 rounded-full p-3">
                <Sparkles className="h-8 w-8 text-primary" />
            </div>
        </div>
        <CardTitle className="font-headline text-2xl">Converse com a Bia</CardTitle>
        <CardDescription className="text-muted-foreground">Sua assistente de IA para a cozinha</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-48 space-y-3 overflow-y-auto rounded-md bg-muted/50 p-3 text-sm">
          {messages.length === 0 && (
             <div className="flex h-full items-center justify-center text-muted-foreground">
                <p>Pergunte sobre receitas e preparos!</p>
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.role === 'bia' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-[80%] rounded-xl px-4 py-2',
                  msg.role === 'user'
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-primary/10 text-foreground'
                )}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
               {msg.role === 'user' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <User className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
            {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Bot className="h-5 w-5" />
                    </div>
                     <div className="bg-primary/10 text-foreground rounded-xl px-4 py-3">
                        <Loader className="h-5 w-5 animate-spin text-primary" />
                    </div>
                 </div>
            )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex: Como cozinhar a batata doce?"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !question.trim()} className="gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Perguntar</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
