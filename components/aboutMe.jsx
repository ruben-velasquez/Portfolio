"use client";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function AboutMe() {
  const woAmI =
    "I am a 16 year old web and video game programmer who is constantly looking to learn new things. It all started when I joined a Pokemon hackroms community, where I realized that programming was my thing.";
  const myHobbys =
    "When I have nothing to do I like to continue with my own projects such as web pages or videogames that I hope to bring out soon, I also like to play football and watch matches of great teams.";

  return (
    <article className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] grid grid-cols-1 md:grid-cols-2 gap-[50px] lg:gap-4 items-start justify-items-center">
      <article className="flex flex-col gap-5 max-w-sm items-center order-last lg:order-first">
        <h1 className={`text-3xl font-bold ${kanit.className} text-highlight`}>
          Who am i?
        </h1>
        <p className="text-slate-400 text-center">{woAmI}</p>
      </article>
      <article className="flex flex-col gap-5 max-w-sm items-center order-last lg:order-first">
        <h1 className={`text-3xl font-bold ${kanit.className} text-highlight`}>
          My hobbies
        </h1>
        <p className="text-slate-400 text-center">{myHobbys}</p>
      </article>
    </article>
  );
}
