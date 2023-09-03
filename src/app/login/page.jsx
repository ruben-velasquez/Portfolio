import { Kanit } from "next/font/google";
import LogIn from "@/components/logIn";
import LogoOut from "@/components/logOut";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "../loading";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default async function Login() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <Suspense fallback={Loading}> 
      <div className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col items-center gap-4">
        <h1
          className={`w-full text-3xl font-bold text-center text-highlight ${kanit.className}`}
        >
          {session ? "Logout" : "Login"}
        </h1>
        {session ? <LogoOut /> : <LogIn />}
      </div>
    </Suspense>
  );
}
