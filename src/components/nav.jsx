import { Quicksand } from "next/font/google";

const quickSand = Quicksand({ subsets: ["latin"], weight: "700" });

export default function Nav() {
  const menuItems = ["Home", "About Me", "Proyects"];

  const logoImage = "https://avatars.githubusercontent.com/u/73437475?v=4";

  return (
    <nav className="h-[90px] flex flex-row py-5 px-10 sm:px-[50px] md:px-5 lg:px-[200px] justify-between">
      <div>Logo</div>
      <ul className="lg:flex flex-row gap-3 hidden">
        <li>About me</li>
        <li>Proyects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
