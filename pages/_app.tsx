import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "../lib/supabase";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session && router.pathname !== "/auth/login") {
        router.push("/auth/login");
      }
      setIsLoggedIn(!!session);
      setLoading(false);
    });
  }, [router]);

  if (loading) return <div>Cargando...</div>;
  return <Component {...pageProps} />;
}
