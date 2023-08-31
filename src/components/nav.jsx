import { Quicksand } from "next/font/google";
import Link from "next/link";

const quickSand = Quicksand({ subsets: ["latin"], weight: "700" });

export default function Nav() {
  const menuItems = ["Home", "About Me", "Proyects"];

  const logoImage = "https://avatars.githubusercontent.com/u/73437475?v=4";

  return (
    <nav className="h-[90px] flex flex-row py-5 px-10 sm:px-[50px] md:px-5 lg:px-[200px] justify-between">
      <div><h1 className="font-bold">Logo</h1></div>
      <ul className="lg:flex flex-row gap-3 hidden">
        <li>
          <Link className="text-sky-500 hover:text-sky-400" href="#">
            About me
          </Link>
        </li>
        <li>
          <Link className="text-sky-500 hover:text-sky-400" href="#">
            Proyects
          </Link>
        </li>
        <li>
          <Link className="text-sky-500 hover:text-sky-400" href="#">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
