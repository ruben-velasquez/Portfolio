"use client";
import Link from "next/link";
import { Kanit } from "next/font/google";
import { RiAdminLine } from "react-icons/ri";
import { Button, Tooltip } from "@nextui-org/react";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function Nav() {
  return (
    <nav className="z-50 bg-navigation items-center h-[70px] flex flex-row py-5 px-10 sm:px-[50px] md:px-5 lg:px-[200px] justify-between fixed top-0 left-0 right-0">
      <div>
        <Link href="/">
          <h1 className={`${kanit.className} font-bold text-xl text-highlight`}>
            Rubén Velásquez
          </h1>
        </Link>
      </div>
      <ul className="lg:flex flex-row gap-3 hidden">
        <li>
          <Link
            className="text-action hover:text-hover-action font-bold"
            href="https://github.com/ruben-velasquez"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            className="text-action hover:text-hover-action font-bold"
            href="https://twitter.com/Rub3nVM"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            className="text-action hover:text-hover-action font-bold"
            href="https://www.linkedin.com/in/ruben-velasquez-b42aa3221/"
          >
            LinkedIn
          </Link>
        </li>
      </ul>

      <Tooltip color={"primary"} content={"Admin authentication"}>
        <Link href="/login">
          <Button
            isIconOnly
            size="md"
            color="primary"
            variant={"bordered"}
            aria-label="Like"
            className={"group hover:bg-action"}
          >
            <RiAdminLine
              size={16}
              className="text-action transition-all duration-700 group-hover:text-slate-200"
            />
          </Button>
        </Link>
      </Tooltip>
    </nav>
  );
}
