'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This component now only serves to redirect to the correct welcome page inside the app group.
export default function RedirectToWelcome() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/welcome');
  }, [router]);

  return null; // Render nothing as the redirect happens
}
