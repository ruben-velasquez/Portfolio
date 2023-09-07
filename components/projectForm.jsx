"use client";
import React from "react";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { handleProject } from "@/utils/handleProject";
import { insertProject } from "@/utils/insertProyect";
import { editProjects } from "@/utils/editProyect";

export default function ProjectsForm({ project = null }) {
  const [isLoading, setLoading] = React.useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    const newProject = handleProject(event);

    if (project) {
      handleEdit(newProject);
    } else {
      createProjects(newProject);
    }
  };

  const handleEdit = async (updatedProject) => {
    const error = await editProjects(updatedProject, project.id);

    if (error) {
      alert("Hubo un error actualizando el proyecto");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  const createProjects = async (newProject) => {
    const error = await insertProject(newProject, supabase);

    if (error) {
      alert("Hubo un error creando el proyecto");
      setLoading(false);
    } else {
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 lg:min-w-[300px]"
    >
      <Input
        isRequired
        isClearable
        name="name"
        type="text"
        disabled={isLoading}
        label="Project Name"
        variant="bordered"
        placeholder="Enter the name"
        defaultValue={project?.name}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <Input
        isRequired
        isClearable
        name="description"
        type="text"
        disabled={isLoading}
        label="Project Description"
        variant="bordered"
        placeholder="Enter the description"
        defaultValue={project?.description || ""}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <Select
        isRequired
        name="isComplete"
        label="Your projects is complete?"
        disabled={isLoading}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      >
        <SelectItem key={true} value={true}>
          True
        </SelectItem>
        <SelectItem key={false} value={false}>
          False
        </SelectItem>
      </Select>
      <Input
        isClearable
        name="tags"
        type="text"
        disabled={isLoading}
        label="Project Tags"
        variant="bordered"
        placeholder="Enter the tags separated by comma"
        defaultValue={project?.tags.map((tag) => tag.name).join(", ")}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <Input
        isRequired
        isClearable
        name="imageUrl"
        type="text"
        disabled={isLoading}
        label="Project Image"
        variant="bordered"
        placeholder="Enter the image URL"
        defaultValue={project?.imageUrl || ""}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <Input
        isRequired
        isClearable
        name="link"
        type="text"
        disabled={isLoading}
        label="Project Page"
        variant="bordered"
        placeholder="Enter the proyect page URL"
        defaultValue={project?.link || ""}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <div className="flex gap-4 justify-start">
        <Button
          disabled={isLoading}
          type="submit"
          color="primary"
          className={`${
            isLoading ? "opacity-50" : ""
          } font-bold hover:bg-hover-action w-min px-7`}
        >
          Confirm
        </Button>
        <Link href={"/dashboard"}>
          <Button
            color="default"
            className={`font-bold w-min px-7 ${isLoading ? "opacity-50" : ""}`}
          >
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
}
