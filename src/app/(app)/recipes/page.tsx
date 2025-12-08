import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Recipe, MealType, AgeGroup } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const mealTypes: MealType[] = ['Café da Manhã', 'Almoço', 'Jantar', 'Sobremesa'];
const ageGroups: AgeGroup[] = ['6-8 meses', '9-11 meses', '12+ meses'];

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

function RecipesByAgeGroup({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="space-y-10">
      {ageGroups.map(ageGroup => {
        const filteredRecipes = recipes.filter(r => r.ageGroup === ageGroup);
        if (filteredRecipes.length === 0) return null;

        return (
          <div key={ageGroup}>
            <h2 className="mb-5 text-2xl font-bold text-foreground">{ageGroup}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function RecipesPage() {
  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Receitas Rápidas</h1>
        <p className="text-lg text-muted-foreground mt-1">Ideias simples para refeições deliciosas.</p>
      </header>

      <Tabs defaultValue={mealTypes[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto flex-wrap sm:grid-cols-4">
          {mealTypes.map(mealType => (
            <TabsTrigger key={mealType} value={mealType} className="py-2.5 text-sm">{mealType}</TabsTrigger>
          ))}
        </TabsList>

        {mealTypes.map(mealType => (
          <TabsContent key={mealType} value={mealType} className="mt-8">
            <RecipesByAgeGroup recipes={recipes.filter(r => r.mealType === mealType)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
