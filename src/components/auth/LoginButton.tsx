'use client';

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

export function LoginButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
  };

  return (
    <Button onClick={handleLogin}>
      Sign in with Google
    </Button>
  );
}