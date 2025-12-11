'use client';

import { Baby, Heart, NotebookText, Star, CalendarDays, ShieldCheck, CalendarHeart, BookHeart, Lightbulb, LogOut, UploadCloud, X, Apple, Stethoscope, Trophy } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { quickTips, recipes as allRecipes } from '@/lib/data';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { cn } from '@/lib/utils';
import type { Recipe } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';


const mainCards = [
  {
    href: '/recipes',
    label: 'Minhas receitas',
    description: 'Receitas rápidas e seguras por fase — tudo pronto para hoje.',
    icon: NotebookText,
    highlight: true,
  },
  {
    href: '/today',
    label: 'Cardápio do Dia',
    description: 'Plano de refeições para facilitar sua rotina em 2 minutos.',
    icon: CalendarHeart,
    highlight: true,
  },
  {
    href: '/checklist',
    label: 'Checklist de Alimentos',
    description: 'Veja o que seu bebê já pode comer e como oferecer com segurança.',
    icon: Apple,
    highlight: true,
  },
    {
    href: '/plan',
    label: 'Plano de 14 Dias',
    description: 'Um guia prático para começar a introdução alimentar com tranquilidade.',
    icon: CalendarDays,
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

const popularRecipeIds = ['22', '84', '37', '28', '11'];

// Function to shuffle an array
const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


export default function WelcomePage() {
  const [quickTip, setQuickTip] = useState('');
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const [babyPhotoUrl, setBabyPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const userName = user?.displayName || 'Mamãe';
  
  const topRecipes = useMemo(() => {
    const popularRecipes = allRecipes.filter(r => popularRecipeIds.includes(r.id));
    return shuffle([...popularRecipes]).slice(0, 5);
  }, []);

  useEffect(() => {
    setQuickTip(getDailyTip());
    const storedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);
    if (storedPhoto) {
      // Create a URL from the stored base64 string to optimize rendering
      const byteCharacters = atob(storedPhoto.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Adjust type if needed
      const objectURL = URL.createObjectURL(blob);
      setBabyPhotoUrl(objectURL);

      // Clean up the object URL when the component unmounts
      return () => URL.revokeObjectURL(objectURL);
    }
  }, []);
  
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (babyPhotoUrl) {
        URL.revokeObjectURL(babyPhotoUrl);
      }
      const url = URL.createObjectURL(file);
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
      URL.revokeObjectURL(babyPhotoUrl);
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
            <h1 className="font-headline text-2xl font-bold text-foreground tracking-tight">
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
        
        <div className="space-y-2">
            {highlightedCards.map((card) => (
                <Link href={card.href} key={card.href} className="group block">
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
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
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-card p-4 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
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

        <div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Trophy className="h-6 w-6 text-amber-500" />
              <h2 className="font-headline text-2xl font-semibold">Top 5 da Semana</h2>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-4">Essas são as receitas mais usadas pelas famílias durante a semana.</p>
            <div className="space-y-3">
              {topRecipes.map((recipe, index) => {
                const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);
                return (
                  <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="group block">
                    <Card className="overflow-hidden transition-all group-hover:shadow-lg group-hover:bg-accent/50">
                      <div className="flex items-center">
                        <div className="flex h-full w-14 shrink-0 items-center justify-center bg-muted/60">
                           <span className="font-headline text-2xl font-bold text-amber-600">{index + 1}º</span>
                        </div>
                        <div className="relative h-20 w-20 shrink-0">
                          {placeholder && (
                            <Image
                              src={placeholder.imageUrl}
                              alt={recipe.name}
                              fill
                              className="object-cover"
                              data-ai-hint={placeholder.imageHint}
                            />
                          )}
                        </div>
                        <div className="flex-1 p-3">
                          <CardTitle className="font-headline text-base leading-snug mb-1">{recipe.name}</CardTitle>
                          <div className="flex flex-wrap gap-1.5">
                            <Badge variant="secondary" className="text-xs">{recipe.ageGroup}</Badge>
                            <Badge variant="outline" className="text-xs">{recipe.mealType}</Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
        </div>

        <Card className="bg-yellow-50 border-yellow-200 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/30">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="text-sm text-yellow-800 font-medium">Dica do dia: bagunça faz parte! Deixar o bebê explorar a comida melhora autonomia, textura e aceitação.</p>
          </CardHeader>
        </Card>
        
        <div className="text-center py-4">
            <p className="text-muted-foreground flex items-center justify-center gap-2">Respira, você está indo muito bem <Heart className="h-4 w-4 text-primary fill-primary" /></p>
        </div>

      </div>
    </div>
  );
}
