"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ImageHandler from "./imageHandler";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  let heroText = "Rubén Velásquez";
  let description = "Web developer and game developer";

  return (
    <main className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] min-h-[calc(80vh-80px)] lg:min-h-[calc(50vh-80px)] grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start gap-4 items-center justify-center">
      <div className="flex flex-col gap-5 max-w-sm order-last md:order-first">
        <h1
          className={`text-6xl lg:text-5xl font-bold text-center md:text-left ${kanit.className} text-highlight`}
        >
          {heroText}
        </h1>
        <p className="text-slate-400 text-center md:text-left">{description}</p>
        <div className="flex justify-center md:justify-start gap-2">
          <Link href={"https://github.com/ruben-velasquez"}>
            <Button
              color="primary"
              className="font-bold hover:bg-hover-action w-min px-7"
            >
              View Github
            </Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/ruben-velasquez-b42aa3221/"}>
            <Button
              color="primary"
              variant="ghost"
              className="font-bold hover:bg-hover-action w-min px-7"
            >
              View LinkedIn
            </Button>
          </Link>
        </div>
      </div>
      <ImageHandler
        src={
          "https://media.discordapp.net/attachments/835918308166336545/1149538782190764062/removal.ai_3d12c532-9319-4ed0-b27a-6747c00c8d21-header-image.png"
        }
        alt="Header Image"
        className={"order-first md:order-last w-[100%] max-w-[400px]"}
      ></ImageHandler>
    </main>
  );
}
