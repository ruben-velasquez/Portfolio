import ProyectCard from "./proyectCard";
import { Kanit } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default async function Proyects() {
  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("Projects").select();

  return (
    <summary
      id="proyects"
      className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col gap-4"
    >
      <h1
        className={`w-full text-3xl font-bold text-center text-highlight ${kanit.className}`}
      >
        Proyects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-[30px] justify-items-center">
        {projects.map((project) => (
          <ProyectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            isComplete={project.isComplete}
            tags={project.tags}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </summary>
  );
}
