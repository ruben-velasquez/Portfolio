import ProjectsCard from "./projectCard";
import { Kanit } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

async function GetProjects() {
  const supabase = createServerComponentClient({ cookies });

  return supabase.from("Projects").select();
}

export default async function Projects() {
  const { data: projects } = await GetProjects();

  return (
    <summary
      id="projects"
      className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col gap-4"
    >
      <h1
        className={`w-full text-3xl font-bold text-center text-highlight ${kanit.className}`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-[30px] justify-items-center">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            isComplete={project.isComplete}
            tags={project.tags}
            link={project.link}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </summary>
  );
}
