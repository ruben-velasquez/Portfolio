import Link from "next/link";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function Nav() {

  return (
    <nav className="z-40 bg-gray-900 items-center h-[70px] flex flex-row py-5 px-10 sm:px-[50px] md:px-5 lg:px-[200px] justify-between fixed top-0 left-0 right-0">
      <div><h1 className={`font-bold text-2xl ${kanit.className}`}>Logo</h1></div>
      <ul className="lg:flex flex-row gap-3 hidden">
        <li>
          <Link className="text-sky-500 hover:text-sky-400" href="#home">
            Github
          </Link>
        </li>
        <li>
          <Link className="text-sky-500 hover:text-sky-400" href="#about">
            Twitter
          </Link>
        </li>
        <li>
          <Link className="text-sky-500 hover:text-sky-400" href="#proyects">
            Linkedin
          </Link>
        </li>
      </ul>
    </nav>
  );
}
