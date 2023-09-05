"use client";
import ProjectsCard from "./projectCard";
import AddProjectsCard from "@/components/addProjectCard";
import { Kanit } from "next/font/google";
import { Divider } from "@nextui-org/react";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function ProjectsDashboard({ projects }) {
  return (
    <>
      <div className="space-y-1 text-left w-full">
        <h4 className={`text-lg font-medium text-highlight ${kanit.className}`}>
          Projects
        </h4>
        <p className="text-small text-default-400">
          All the projects made by me.
        </p>
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
