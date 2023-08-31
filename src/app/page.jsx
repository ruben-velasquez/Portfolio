import Hero from "@/components/hero";
import AboutMe from "@/components/aboutMe";

export default async function page() {
  return (
    <section className="flex flex-col gap-8">
      <Hero />
      <AboutMe />
    </section>
  );
}