"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function AdminLayout({ children }) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/");
      } else {
        setSession(data.session);
      }
    });
  }, [supabase, router]);

  return session ? children : <Loading />;
}
