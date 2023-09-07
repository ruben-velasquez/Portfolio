"use client";
import ProjectsCard from "./projectCard";
import AddProjectsCard from "@/components/addProjectCard";
import { Kanit } from "next/font/google";
import { Divider } from "@nextui-org/react";
import { MdReplay } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function ProjectsDashboard({ projects }) {
  const router = useRouter();

  return (
    <>
      <div className={"flex justify-between items-center w-full"}>
        <div className="space-y-1 text-left">
          <h4
            className={`text-lg font-medium text-highlight ${kanit.className}`}
          >
            Projects
          </h4>
          <p className="text-small text-default-400">
            All the projects made by me.
          </p>
        </div>
        <Button
          isIconOnly
          size="md"
          color="primary"
          variant={"bordered"}
          aria-label="Like"
          className={"group hover:bg-action"}
          onPress={router.refresh}
        >
          <MdReplay
            size={16}
            className="text-action transition-all duration-700 group-hover:text-slate-200"
          />
        </Button>
      </div>
      <Divider className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-[30px] justify-items-start w-full">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            isComplete={project.isComplete}
            tags={project.tags}
            imageUrl={project.imageUrl}
            link={project.link}
            admin={true}
          />
        ))}
        <AddProjectsCard />
      </div>
    </>
  );
}
