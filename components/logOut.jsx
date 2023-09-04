"use client";
import { Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogOut() {
  const [isLoading, setLoading] = React.useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error);
      setLoading(false);
    } else {
      supabase.auth.getSession().then(({ data }) => {
        if (!data.session) {
          router.refresh();
        }
      });
    }
  };

  return (
    <Button
      onPress={handleLogout}
      disabled={isLoading}
      color="primary"
      className={`font-bold hover:bg-hover-action w-min px-7 ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      Log out
    </Button>
  );
}
