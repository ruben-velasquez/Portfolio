"use client";
import React from "react";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function ProyectForm({ project = null }) {
  const [isLoading, setLoading] = React.useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    const newProject = {
      name: event.target.name.value,
      description: event.target.description.value,
      isComplete: event.target.isComplete.value == "true",
      tags: event.target.tags.value.split(", ").map((tag) => {
        return {
          name: tag,
        };
      }),
      imageUrl: event.target.imageUrl.value,
    };

    if (project) {
      editProyect(newProject);
    } else {
      createProyect(newProject);
    }
  };

  const editProyect = async (updatedProject) => {
    const { data, error } = await supabase
      .from("Projects")
      .update(updatedProject)
      .eq("id", project.id)
      .select();

    if (error) {
      alert("Hubo un error actualizando el proyecto");
      setLoading(false);
    } else {
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000)
    }
  };
  
  const createProyect = async (newProject) => {
    const { error } = await supabase
      .from("Projects")
      .insert([newProject])
      .select();

    if (error) {
      alert("Hubo un error creando el proyecto");
      setLoading(false);
    } else {
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000)
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
        label="Your proyect is complete?"
        className="max-w-xs"
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
    </form>
  );
}
