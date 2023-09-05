import { Kanit } from "next/font/google";
import ProjectsForm from "@/components/projectForm";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default async function CreatePage() {
  return (
    <div className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col items-center gap-4">
      <h1
        className={`w-full text-3xl font-bold text-center text-highlight ${kanit.className}`}
      >
        Create Project
      </h1>
      <ProjectsForm />
    </div>
  );
}
