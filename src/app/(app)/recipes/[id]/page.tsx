import { notFound } from 'next/navigation';
import Image from 'next/image';
import { recipes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);
  
  if (!recipe) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);

  return (
    <div className="animate-in fade-in">
      <div className="relative h-60 w-full">
         {placeholder && (
           <Image
            src={placeholder.imageUrl}
            alt={recipe.name}
            fill
            className="object-cover"
            data-ai-hint={placeholder.imageHint}
          />
         )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Link href="/recipes" className="absolute left-4 top-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background/80">
                <ChevronLeft className="h-4 w-4" />
            </Button>
        </Link>
        <h1 className="font-headline absolute bottom-4 left-4 text-3xl font-bold text-white">
          {recipe.name}
        </h1>
      </div>
      
      <div className="p-4 sm:p-6 space-y-8">
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-3">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-3">Passo a passo</h2>
          <ol className="list-decimal list-inside space-y-4 text-foreground">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="pl-2">
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
