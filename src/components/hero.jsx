"use client";
import { Button } from "@nextui-org/react";
import ImageHandler from "./imageHandler";

export default function Hero() {
  let hertText = "Hero Text";
  let description =
    "A quickly description about the page and the problem that we wanna solve.";

  return (
    <main className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] min-h-[calc(80vh-80px)] lg:min-h-[calc(50vh-80px)] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
      <div className="flex flex-col gap-5 max-w-sm order-last lg:order-first">
        <h1 className="text-3xl font-bold">{hertText}</h1>
        <p className="text-slate-400">{description}</p>
        <Button color="primary">Call to Action</Button>
      </div>
      <ImageHandler
        src={"https://placehold.co/600x400?text=Hello+World"}
        alt="Descripción de la imagen"
        className={"order-first lg:order-last w-[100%]"}
      ></ImageHandler>
    </main>
  );
}
