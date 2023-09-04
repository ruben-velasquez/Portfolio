"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      alert(error);
    } else {
      router.push("/dashboard");
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <Input
        isClearable
        disabled={isLoading}
        name="email"
        type="email"
        label="Email"
        variant="bordered"
        placeholder="Enter your email"
        defaultValue=""
        onClear={() => console.log("input cleared")}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <Input
        disabled={isLoading}
        name="password"
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className={`max-w-xs ${isLoading ? "opacity-50" : ""}`}
      />
      <Button
        disabled={isLoading}
        type="submit"
        color="primary"
        className={`${
          isLoading ? "opacity-50" : ""
        } font-bold hover:bg-hover-action w-min px-7`}
      >
        Log in
      </Button>
    </form>
  );
}
