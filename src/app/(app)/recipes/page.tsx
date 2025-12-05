import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="relative h-40 w-full">
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
        <div className="flex flex-1 flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{recipe.name}</CardTitle>
            <CardDescription>{recipe.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{recipe.ageGroup}</Badge>
              <Badge variant="outline">{recipe.texture}</Badge>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}

function RecipesByAgeGroup({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="space-y-8">
      {ageGroups.map(ageGroup => {
        const filteredRecipes = recipes.filter(r => r.ageGroup === ageGroup);
        if (filteredRecipes.length === 0) return null;

        return (
          <div key={ageGroup}>
            <h2 className="mb-4 text-xl font-bold text-foreground">{ageGroup}</h2>
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
    <div className="animate-in fade-in p-4 sm:p-6">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold text-foreground">Receitas Rápidas</h1>
        <p className="text-muted-foreground">Ideias simples para refeições deliciosas.</p>
      </header>

      <Tabs defaultValue={mealTypes[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto flex-wrap sm:grid-cols-4">
          {mealTypes.map(mealType => (
            <TabsTrigger key={mealType} value={mealType}>{mealType}</TabsTrigger>
          ))}
        </TabsList>

        {mealTypes.map(mealType => (
          <TabsContent key={mealType} value={mealType} className="mt-6">
            <RecipesByAgeGroup recipes={recipes.filter(r => r.mealType === mealType)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
