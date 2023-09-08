import "@/app/globals.css";
import "@/app/favicon.ico";
import { Providers } from "./providers";
import Nav from "@/components/nav";

export const metadata = {
  title: "Rubén Velásquez",
  description: "A personal portfolio of a Web Developer and Game Developer",
  creator: "Rubén Velásquez",
  keywords: ["Portfolio", "Web Developer", "Game Developer"],
  colorScheme: "dark",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
