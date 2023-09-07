"use client";
import { Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    <div className={"flex gap-2"}>
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
      <Link href={"/dashboard"}>
        <Button
          disabled={isLoading}
          color="primary"
          className={`font-bold hover:bg-hover-action w-min px-7 ${
            isLoading ? "opacity-50" : ""
          }`}
        >
          Go To Dashboard
        </Button>
      </Link>
    </div>
  );
}
