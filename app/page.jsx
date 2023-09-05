import Hero from "@/components/hero";
import AboutMe from "@/components/aboutMe";
import Projects from "@/components/projects";

export default async function page() {
  return (
    <section className="flex flex-col gap-[50px] py-[20px]">
      <Hero />
      <AboutMe />
      <Projects />
    </section>
  );
}
