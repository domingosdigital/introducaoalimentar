import Link from 'next/link';
import { Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-muted p-4">
      <div className="w-full max-w-sm animate-in fade-in zoom-in-95">
        <Card className="shadow-2xl">
          <CardHeader className="text-center p-8">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Baby className="h-10 w-10" />
            </div>
            <CardTitle className="font-headline text-4xl font-bold text-foreground">
              Primeiras Mordidas
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground pt-1">
              Seu guia para a introdução alimentar.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
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
                 <Button asChild className="w-full h-12 text-base font-semibold" size="lg">
                  <Link href="/welcome">Entrar</Link>
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
