import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function DeleteProjects({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { error } = await supabase
    .from("Projects")
    .delete()
    .eq("id", params.id);

  if (error) {
    console.log(error.message);
  }

  return (
    <div className="px-10 sm:px-[50px] md:px-5 lg:px-[200px] flex flex-col items-center gap-4">
      {error ? (
        <h1>The projects has been not deleted</h1>
      ) : (
        <h1>Successfull deleted</h1>
      )}
    </div>
  );
}
