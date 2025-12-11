'use client';
import { useAuth, useUser } from '@/firebase';
import BottomNav from '@/components/bottom-nav';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/');
    }
  }, [user, isUserLoading, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  if (isUserLoading || !user) {
    return (
      <div className="flex h-dvh w-full items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }
  return (
    <div className="mobile-container">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-center bg-primary">
        <h1 className="font-headline text-3xl font-bold text-primary-foreground">
          Baby<span className="font-normal">Food®</span>
        </h1>
      </header>
      <main className="flex-1 overflow-y-auto">{children}</main>
      <BottomNav />
    </div>
  );
}
