import { notFound } from 'next/navigation';
import Image from 'next/image';
import { recipes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft, Soup, Drumstick, Clock, Flame, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);
  
  if (!recipe) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);

  return (
    <div className="animate-in fade-in">
      <div className="relative h-72 w-full">
         {placeholder && (
           <Image
            src={placeholder.imageUrl}
            alt={recipe.name}
            fill
            className="object-cover"
            data-ai-hint={placeholder.imageHint}
          />
         )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <Link href="/recipes" className="absolute left-4 top-6 z-10">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-background/80 hover:bg-background">
                <ChevronLeft className="h-5 w-5" />
            </Button>
        </Link>
        <div className="absolute bottom-6 left-6 right-6">
            <h1 className="font-headline text-4xl font-bold text-white leading-tight">
              {recipe.name}
            </h1>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="secondary">{recipe.ageGroup}</Badge>
              <Badge variant="secondary">{recipe.mealType}</Badge>
              <Badge variant="secondary">{recipe.texture}</Badge>
            </div>
        </div>
      </div>
      
      <div className="p-6 sm:p-8 space-y-10">
        
        <Card>
          <CardHeader className='pb-4'>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className='flex flex-col items-center gap-1'>
                <Clock className="h-6 w-6 text-primary" />
                <span className='text-sm font-semibold text-foreground'>{recipe.cookingTime}</span>
                <span className='text-xs text-muted-foreground'>Preparo</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                <span className='text-sm font-semibold text-foreground'>{recipe.cookingInfo.split(',')[1] || recipe.cookingInfo}</span>
                <span className='text-xs text-muted-foreground'>Utensílio</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Drumstick className="h-6 w-6 text-primary" />
            <h2 className="font-headline text-2xl font-semibold">Ingredientes</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-base pl-2">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Soup className="h-6 w-6 text-primary" />
            <h2 className="font-headline text-2xl font-semibold">Passo a passo</h2>
          </div>
          <ol className="list-decimal list-inside space-y-5 text-foreground text-base">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="pl-2">
                <span className="text-muted-foreground leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
