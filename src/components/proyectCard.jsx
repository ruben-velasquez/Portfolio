"use client";
import { Card, Chip, Button } from "@nextui-org/react";
import ImageHandler from "./imageHandler";

export default function ProyectCard({ name, description, isComplete, tags, imageUrl }) {
  const maxCharacters = 120;

  const fixedDescription = description
    .slice(0, maxCharacters - 3)
    .concat("...");

  return (
    <Card className="bg-gray-800 max-w-[300px] h-[400px] border-gray-700 border-2 flex flex-col gap-[10px]">
      <div className="relative">
        <ImageHandler
          src={imageUrl}
          alt="Descripción de la imagen"
          className={"order-first lg:order-last w-[100%] rounded-b-none"}
        ></ImageHandler>
        <div className="z-10 absolute top-1 right-1 flex flex-row-reverse gap-1">
          {tags.map((tag, index) => (
            <Chip key={index} className={`z-2 ${tag.color} text-gray-200`} size="sm">
              {tag.name}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[10px] mx-[10px]">
        <div className="flex flex-row justify-between items-start">
          <h1 className="font-bold text-lg text-slate-300">{name}</h1>
          {isComplete ? (
            <Chip color="success" size="sm">
              Is Complete
            </Chip>
          ) : (
            <Chip color="default" size="sm">
              In progress
            </Chip>
          )}
        </div>
        <p className="text-slate-400 text-base">{fixedDescription}</p>
      </div>

      <Button color="primary" className="m-[10px] mt-auto font-bold">
        Learn more
      </Button>
    </Card>
  );
}
