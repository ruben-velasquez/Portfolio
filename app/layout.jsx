import "@/app/globals.css";
import { Providers } from "./providers";
import Nav from "@/components/nav";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
