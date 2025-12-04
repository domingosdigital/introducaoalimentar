import Link from 'next/link';
import { Baby, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-muted p-4">
      <div className="w-full max-w-sm">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Baby className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline text-3xl text-foreground">
              Primeiras Mordidas
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Seu guia para a introdução alimentar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="mae@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2 pt-4">
                 <Button asChild className="w-full" size="lg">
                  <Link href="/today">Entrar</Link>
                </Button>
                <Button variant="link" size="sm" className="w-full">
                  Não tem uma conta? Cadastre-se
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
