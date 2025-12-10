'use client';

import { Baby, Heart, NotebookText, Star, CalendarDays, ShieldCheck, CalendarHeart, BookHeart, Lightbulb, LogOut, UploadCloud, X, Apple, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { quickTips } from '@/lib/data';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { cn } from '@/lib/utils';

const mainCards = [
  {
    href: '/recipes',
    label: 'Minhas receitas',
    description: 'Explore pratos por idade e refeição.',
    icon: NotebookText,
    highlight: true,
  },
  {
    href: '/today',
    label: 'Cardápio do Dia',
    description: 'Um plano de refeições para hoje.',
    icon: CalendarHeart,
    highlight: true,
  },
  {
    href: '/checklist',
    label: 'Checklist de Alimentos',
    description: 'Acompanhe os alimentos que seu bebê já experimentou.',
    icon: Apple,
    highlight: true,
  },
];

const featureCards = [
    {
    href: '/guide',
    label: 'Dicas Úteis',
    description: 'Respostas para suas dúvidas.',
    icon: BookHeart,
  },
  {
    href: '/phases',
    label: 'Evolução do Bebê',
    icon: Baby,
  },
  {
    href: '/exams',
    label: 'Exames',
    icon: Stethoscope,
  },
  {
    href: '/plan',
    label: 'Plano de 14 Dias',
    icon: CalendarDays,
  },
  {
    href: '/safety',
    label: 'Guia de Segurança',
    icon: ShieldCheck,
  },
   {
    href: '/favorites',
    label: 'Favoritos',
    icon: Star,
  },
];

const getDailyTip = () => {
    const now = new Date();
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return quickTips[dayOfYear % quickTips.length];
};

const PHOTO_STORAGE_KEY = 'primeiras-mordidas-baby-photo';

export default function WelcomePage() {
  const [quickTip, setQuickTip] = useState('');
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const [babyPhotoUrl, setBabyPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const userName = user?.displayName || 'Mamãe';

  useEffect(() => {
    setQuickTip(getDailyTip());
    const storedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);
    if (storedPhoto) {
      setBabyPhotoUrl(storedPhoto);
    }

    return () => {
        if (babyPhotoUrl && babyPhotoUrl.startsWith('blob:')) {
            URL.revokeObjectURL(babyPhotoUrl);
        }
    }
  }, []);
  
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (babyPhotoUrl && babyPhotoUrl.startsWith('blob:')) {
          URL.revokeObjectURL(babyPhotoUrl);
      }
      setBabyPhotoUrl(url);

      // Save to localStorage as Base64 for persistence across sessions
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem(PHOTO_STORAGE_KEY, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    localStorage.removeItem(PHOTO_STORAGE_KEY);
     if (babyPhotoUrl) {
      if (babyPhotoUrl.startsWith('blob:')) {
        URL.revokeObjectURL(babyPhotoUrl);
      }
      setBabyPhotoUrl(null);
    }
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  }


  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const highlightedCards = mainCards.filter(c => c.highlight);

  return (
    <div className="animate-in fade-in flex h-full flex-col bg-muted/50 p-6 sm:p-8 space-y-6">

      <div className="space-y-6">
        
        <header className="text-left">
          <div className="flex justify-between items-center">
            <h1 className="font-headline text-3xl font-bold text-foreground tracking-tight">
              Olá, <span className="text-primary">{userName}</span>!
            </h1>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handlePhotoUpload}
          className="hidden"
          accept="image/*"
        />
        
        {babyPhotoUrl ? (
           <div 
             className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md cursor-pointer group"
             onClick={() => fileInputRef.current?.click()}
            >
              <Image
                src={babyPhotoUrl}
                alt="Foto do bebê"
                fill
                className="object-contain"
                data-ai-hint="baby photo"
              />
              <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                  <p className='text-white font-semibold'>Trocar foto</p>
              </div>
               <Button 
                variant="destructive" 
                size="icon" 
                className="absolute top-2 right-2 h-8 w-8 z-10 opacity-50 group-hover:opacity-100 transition-opacity"
                onClick={handleRemovePhoto}
                >
                <X className="h-4 w-4" />
              </Button>
          </div>
        ) : (
          <div 
            className="w-full aspect-[4/3] rounded-2xl shadow-md border-2 border-dashed border-muted-foreground/50 bg-card flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-accent transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadCloud className="h-10 w-10 text-primary mb-2" />
            <p className="font-semibold text-foreground">Clique para enviar uma foto do seu bebê</p>
            <p className="text-sm text-muted-foreground">E deixe o app com a sua cara!</p>
          </div>
        )}
        
        <h1 className="text-xl font-bold font-headline text-foreground leading-tight">
            A introdução alimentar do seu bebê<br/>sem medo e sem dúvidas.
        </h1>

        <div className="space-y-4">
            {highlightedCards.map((card) => (
                <Link href={card.href} key={card.href} className="group block">
                    <Card className="shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className={cn('flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20')}>
                                <card.icon className={cn('h-6 w-6 text-primary transition-colors group-hover:text-primary')} />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{card.label}</CardTitle>
                                <CardDescription className="text-sm">{card.description}</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {featureCards.map((item) => (
            <Link href={item.href} key={item.href} className="group">
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={cn('mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20')}
                >
                  <item.icon className={cn('h-8 w-8 text-primary transition-colors group-hover:text-primary')} />
                </div>
                <span className="font-semibold text-foreground text-base leading-tight">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
        
         <Card className="bg-accent border-accent-foreground/20 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="h-6 w-6 text-accent-foreground" />
                <p className="text-sm text-accent-foreground font-medium">{quickTip}</p>
            </CardHeader>
        </Card>
        
        <div className="text-center py-4">
            <p className="text-muted-foreground flex items-center justify-center gap-2">Respira, você está indo muito bem <Heart className="h-4 w-4 text-primary fill-primary" /></p>
        </div>

      </div>
    </div>
  );
}
