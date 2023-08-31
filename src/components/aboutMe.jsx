"use client"
import { Button } from "@nextui-org/react";

export default function AboutMe() {
    const lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae itaque adipisci temporibus molestias nihil, sint ratione accusamus cum perferendis repellat debitis laborum libero, dignissimos et. Consectetur veniam fugit iure enim."
  
    return (
    <article className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-4 items-center justify-center">
      <article className="flex flex-col gap-5 max-w-sm items-center order-last lg:order-first">
        <h1 className="text-3xl font-bold">Who am i?</h1>
        <p className="text-slate-400 text-center">{lorem}</p>
      </article>
      <article className="flex flex-col gap-5 max-w-sm items-center order-last lg:order-first">
        <h1 className="text-3xl font-bold">My hobbies</h1>
        <p className="text-slate-400 text-center">{lorem}</p>
      </article>
    </article>
  );
}
