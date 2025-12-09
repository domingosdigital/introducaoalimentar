'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, User, Send } from 'lucide-react';
import { nutriChat } from '@/ai/flows/nutri-flow';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

const initialMessage: Message = {
    role: 'bot',
    text: 'Olá! Sou a Nutri IA, sua assistente virtual especialista em introdução alimentar (6-24 meses). Como posso ajudar hoje? Você pode pedir sugestões de cardápio, receitas ou dicas sobre como introduzir um alimento específico.'
};


export default function NutriIAPage() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await nutriChat(input);
      const botMessage: Message = { role: 'bot', text: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { role: 'bot', text: 'Desculpe, não consegui processar sua pergunta. Tente novamente.' };
      setMessages((prev) => [...prev, errorMessage]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in p-6 sm:p-8 flex flex-col h-[calc(100dvh-4rem)]">
        <header className="mb-6">
            <h1 className="font-headline text-4xl font-bold text-foreground">Nutri IA</h1>
            <p className="text-lg text-muted-foreground mt-1">Sua assistente virtual para dúvidas sobre introdução alimentar.</p>
        </header>

        <div className="flex-1 overflow-y-auto pr-4 -mr-4 space-y-6">
            {messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'bot' && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Bot className="h-6 w-6" />
                </div>
                )}
                <div className={`rounded-2xl p-4 max-w-[80%] ${
                    message.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-card border shadow-sm rounded-bl-none'
                }`}>
                    <p className="text-base whitespace-pre-wrap">{message.text}</p>
                </div>
                 {message.role === 'user' && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground shrink-0">
                    <User className="h-6 w-6" />
                </div>
                )}
            </div>
            ))}
             {isLoading && (
                 <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Bot className="h-6 w-6" />
                    </div>
                    <div className="rounded-2xl p-4 bg-card border shadow-sm rounded-bl-none">
                        <div className="flex items-center gap-2">
                           <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-0"></span>
                           <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-200"></span>
                           <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-400"></span>
                        </div>
                    </div>
                </div>
            )}
        </div>

        <div className="mt-auto pt-6">
             <p className="text-xs text-center text-muted-foreground mb-2">Este assistente não substitui orientação médica profissional.</p>
             <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Digite sua dúvida aqui..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 h-12 text-base"
                />
                <Button type="submit" size="icon" className="h-12 w-12" disabled={isLoading}>
                    <Send className="h-5 w-5" />
                </Button>
            </form>
        </div>
    </div>
  );
}
