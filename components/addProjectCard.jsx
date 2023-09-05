"use client";
import { AiOutlineFolderAdd } from "react-icons/ai";
import Link from "next/link";

export default function AddProjectsCard() {
  return (
    <Link href={"dashboard/proyect/create"}>
      <div className="bg-transparent group overflow-hidden rounded-medium w-[300px] max-w-[300px] h-[400px] transition-all duration-500 border-gray-700 hover:border-gray-400 border-2 flex flex-col items-center justify-center gap-[10px]">
        <AiOutlineFolderAdd
          size={32}
          className="text-slate-400 transition-all duration-700 group-hover:text-slate-50"
        />
        <h1 className="font-bold text-lg text-slate-400 transition-all duration-700 group-hover:text-slate-50">
          Add Project
        </h1>
      </div>
    </Link>
  );
}
