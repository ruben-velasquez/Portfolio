import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function insertProject(newProject) {
  const supabase = createClientComponentClient();

  const { error } = await supabase
    .from("Projects")
    .insert([newProject])
    .select();

  return error;
}
