'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import type { Recipe } from '@/lib/types';
import { useFavorites } from '@/hooks/use-favorites';
import { Star } from 'lucide-react';

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);
  return (
    <Link href={`/recipes/${recipe.id}`} className="group block">
      <Card className="overflow-hidden transition-all h-full flex flex-col group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative h-48 w-full">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={recipe.name}
              fill
              className="object-cover"
              data-ai-hint={placeholder.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
           <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/90 text-secondary-foreground backdrop-blur-sm">{recipe.ageGroup}</Badge>
              <Badge variant="outline" className="bg-white/90 text-secondary-foreground backdrop-blur-sm">{recipe.texture}</Badge>
            </div>
        </div>
        <CardHeader className="flex-1">
            <CardTitle className="font-headline text-xl leading-snug">{recipe.name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Receitas Favoritas</h1>
        <p className="text-lg text-muted-foreground mt-1">Suas receitas salvas para fácil acesso.</p>
      </header>

      {favoriteRecipes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 border-2 border-dashed rounded-xl">
            <Star className="h-12 w-12 text-muted-foreground mx-auto" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">Nenhuma Receita Favorita</h2>
            <p className="mt-2 text-base text-muted-foreground">
                Clique na estrela <Star className="inline-block h-4 w-4 align-text-bottom" /> em qualquer receita para salvá-la aqui.
            </p>
            <Link href="/recipes" className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-primary/90 transition-colors">
                Explorar Receitas
            </Link>
        </div>
      )}
    </div>
  );
}
