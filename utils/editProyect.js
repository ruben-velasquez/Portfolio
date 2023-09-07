import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function editProjects(updatedProject, id) {
  const supabase = createClientComponentClient();
  const { error } = await supabase
    .from("Projects")
    .update(updatedProject)
    .eq("id", id)
    .select();

  return error;
}
