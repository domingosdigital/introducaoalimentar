import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { foodHistory } from "@/lib/data";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Card, CardContent } from "@/components/ui/card";
import { IconLiked, IconDisliked, IconStrange, IconNone } from "@/components/icons";
import type { Reaction } from "@/lib/types";

function ReactionIcon({ reaction }: { reaction: Reaction }) {
  const icons: Record<Reaction, React.ReactNode> = {
    liked: <IconLiked className="h-8 w-8 text-green-500" />,
    disliked: <IconDisliked className="h-8 w-8 text-red-500" />,
    strange: <IconStrange className="h-8 w-8 text-yellow-500" />,
    none: <IconNone className="h-8 w-8 text-gray-400" />,
  };
  return <>{icons[reaction]}</>;
}

function groupHistoryByDate(history: typeof foodHistory) {
    return history.reduce((acc, item) => {
        const date = item.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {} as Record<string, typeof foodHistory>);
}

export default function HistoryPage() {
  const groupedHistory = groupHistoryByDate(foodHistory);

  return (
    <div className="animate-in fade-in p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Histórico</h1>
        <p className="text-lg text-muted-foreground mt-1">A jornada de sabores do seu bebê.</p>
      </header>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline" className="py-2.5 text-sm">Linha do Tempo</TabsTrigger>
          <TabsTrigger value="alimentos" className="py-2.5 text-sm">Alimentos</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-8 space-y-8">
            {Object.entries(groupedHistory).map(([date, items]) => (
                <div key={date} className="relative pl-12">
                    <div className="absolute left-5 top-1 h-full w-0.5 bg-border -z-10"></div>
                    <div className="absolute left-0 top-0 flex items-center gap-4">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <span className="text-sm font-bold">{format(parseISO(date), 'dd')}</span>
                        </div>
                    </div>
                    <h3 className="mb-3 font-semibold text-muted-foreground">{format(parseISO(date), "EEEE, d 'de' MMMM", { locale: ptBR })}</h3>
                    <div className="space-y-3">
                        {items.map(item => (
                             <div key={item.id} className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border">
                                <span className="font-medium text-base">{item.foodName}</span>
                                <ReactionIcon reaction={item.reaction} />
                             </div>
                        ))}
                    </div>
                </div>
            ))}
        </TabsContent>

        <TabsContent value="alimentos" className="mt-8">
            <Card>
                <CardContent className="p-0">
                    <ul className="divide-y">
                        {foodHistory.map(item => (
                            <li key={item.id} className="flex items-center justify-between p-4">
                                <div>
                                    <p className="font-semibold text-base">{item.foodName}</p>
                                    <p className="text-sm text-muted-foreground">
                                      {format(parseISO(item.date), "dd/MM/yyyy")}
                                    </p>
                                </div>
                                <ReactionIcon reaction={item.reaction} />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
