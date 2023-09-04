import Hero from "@/components/hero";
import AboutMe from "@/components/aboutMe";
import Proyects from "@/components/proyects";

export default async function page() {
  return (
    <section className="flex flex-col gap-[50px] py-[20px]">
      <Hero />
      <AboutMe />
      <Proyects />
    </section>
  );
}
