"use client";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

import { useRouter } from "next/navigation";

import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ButtonAuth({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div>
      {session == null ? (
        <Button onClick={handleSignIn}>
          <FaGithub className="mr-2 h-4 w-4" /> Iniciar sesion con GitHub
        </Button>
      ) : (
        <Button onClick={handleSignOut}>Cerrar Sesión</Button>
      )}
    </div>
  );
}
