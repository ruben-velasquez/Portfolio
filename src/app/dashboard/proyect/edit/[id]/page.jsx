import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Kanit } from "next/font/google";
import ProyectForm from "@/components/proyectForm";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default async function EditPage({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Projects").select().eq("id", params.id);

  if (error) {
    console.error('Error recuperando el elemento', error)
    return null
  }

  const project = data[0]
  
  return (
    <div className='px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col items-center gap-4'>
      <h1 className={`w-full text-3xl font-bold text-center text-highlight ${kanit.className}`}>Edit Project</h1>
      <ProyectForm project={project}/>
    </div>
  );
}
