"use client";
import { Button } from "@nextui-org/react";
import ImageHandler from "./imageHandler";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  let heroText = "Hero Text";
  let description =
    "A quickly description about the page and the problem that we wanna solve.";

  return (
    <main className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] min-h-[calc(80vh-80px)] lg:min-h-[calc(50vh-80px)] grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start gap-4 items-center justify-center">
      <div className="flex flex-col gap-5 max-w-sm order-last md:order-first">
        <h1
          className={`text-6xl lg:text-7xl font-bold text-center md:text-left ${kanit.className} text-highlight`}
        >
          {heroText}
        </h1>
        <p className="text-slate-400 text-center md:text-left">{description}</p>
        <div className="flex justify-center md:justify-start gap-2">
          <Button
            color="primary"
            className="font-bold hover:bg-hover-action w-min px-7"
          >
            Call to Action
          </Button>
          <Button
            color="primary"
            variant="ghost"
            className="font-bold hover:bg-hover-action w-min px-7"
          >
            Call to Action
          </Button>
        </div>
      </div>
      <ImageHandler
        src={"https://placehold.co/600x400?text=Hello+World"}
        alt="Descripción de la imagen"
        className={"order-first md:order-last w-[100%] max-w-[400px]"}
      ></ImageHandler>
    </main>
  );
}
