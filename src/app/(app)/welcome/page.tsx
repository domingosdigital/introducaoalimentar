'use client';

import { Baby, History, Info, NotebookText, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { askBia } from '@/ai/flows/ask-bia-flow';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const menuItems = [
  {
    href: '/today',
    label: 'Sugestão do Dia',
    icon: Sparkles,
    color: 'text-sky-600',
    bgColor: 'bg-sky-100/80',
  },
  {
    href: '/recipes',
    label: 'Receitas',
    icon: NotebookText,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100/80',
  },
  {
    href: '/history',
    label: 'Histórico',
    icon: History,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100/80',
  },
  {
    href: '/guide',
    label: 'Guia Rápido',
    icon: Info,
    color: 'text-violet-600',
    bgColor: 'bg-violet-100/80',
  },
];

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function WelcomePage() {
  const userName = 'Mamãe';
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await askBia({ question: inputValue });
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error asking Bia:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content:
          'Desculpe, não consegui processar sua pergunta. Tente novamente.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-background p-6 sm:p-8 space-y-8">
      <header className="text-center mt-4">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
                 <Baby className="h-10 w-10 text-primary" />
            </div>
        </div>
        <h1 className="font-headline text-3xl font-bold text-foreground tracking-tight">
          Olá, <span className="text-primary">{userName}</span>!
        </h1>
        <p className="text-lg text-muted-foreground mt-1">O que vamos explorar hoje?</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href} className="group">
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-card">
              <div
                className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${item.bgColor} transition-colors group-hover:bg-primary/20`}
              >
                <item.icon className={`h-7 w-7 ${item.color} transition-colors group-hover:text-primary`} />
              </div>
              <span className="font-semibold text-foreground text-sm">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
      
      <Card className="p-4 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
            <Avatar className="border-2 border-primary/50 h-11 w-11">
                <AvatarImage src="https://i.imgur.com/5A22F4R.png" alt="Bia, a assistente virtual" />
                <AvatarFallback>BIA</AvatarFallback>
            </Avatar>
            <div>
                <h2 className="font-headline text-lg font-bold">Converse com a Bia</h2>
                <p className="text-sm text-muted-foreground">Sua assistente de IA para tirar dúvidas!</p>
            </div>
        </div>

        <div className="space-y-4 mb-4 h-48 overflow-y-auto p-2 rounded-md bg-muted/50">
            {messages.length === 0 && (
                 <div className="flex h-full items-center justify-center">
                    <p className="text-center text-sm text-muted-foreground">
                        Pergunte sobre receitas, ingredientes ou dicas de preparo!
                        <br/>
                        Ex: "Como faço o purê de abóbora?"
                    </p>
                </div>
            )}
            {messages.map((msg, index) => (
                <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'assistant' && (
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://i.imgur.com/5A22F4R.png" alt="Bia" />
                            <AvatarFallback>BIA</AvatarFallback>
                        </Avatar>
                    )}
                    <div className={`rounded-lg px-3 py-2 text-sm max-w-[85%] ${
                        msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-br-none' 
                        : 'bg-muted text-foreground rounded-bl-none'
                    }`}>
                        <p className="leading-relaxed">{msg.content}</p>
                    </div>
                 </div>
            ))}
            {isLoading && (
                 <div className="flex items-end gap-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="https://i.imgur.com/5A22F4R.png" alt="Bia" />
                        <AvatarFallback>BIA</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-3 py-2 text-sm bg-muted text-foreground rounded-bl-none">
                        <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-0" />
                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-150" />
                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-300" />
                        </div>
                    </div>
                </div>
            )}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida aqui..."
                className="min-h-0 h-11 resize-none"
                rows={1}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                    }
                }}
                disabled={isLoading}
            />
            <Button type="submit" size="icon" className="h-11 w-11 shrink-0" disabled={isLoading}>
                <Send className="h-5 w-5"/>
            </Button>
        </form>
      </Card>
    </div>
  );
}
