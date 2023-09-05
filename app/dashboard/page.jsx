import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Kanit } from "next/font/google";
import ProjectsDashboard from "@/components/projectsDashboard";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("Projects").select();

  return (
    <div className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col items-center gap-4">
      <h1
        className={`w-full text-3xl font-bold text-center text-highlight ${kanit.className}`}
      >
        Dashboard
      </h1>

      <ProjectsDashboard projects={projects} />
    </div>
  );
}
