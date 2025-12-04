import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function RecipesPage() {
  return (
    <div className="animate-in fade-in p-4 sm:p-6">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold text-foreground">Receitas Rápidas</h1>
        <p className="text-muted-foreground">Ideias simples para refeições deliciosas.</p>
      </header>

      <div className="grid gap-6">
        {recipes.map((recipe) => {
          const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);
          return (
            <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="group block">
              <Card className="overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-40 w-full sm:h-auto sm:w-1/3">
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
                  <div className="flex-1">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{recipe.name}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
