"use client"
import { Spinner } from "@nextui-org/react";

export default function Loading() {
    return <Spinner color="default" className={`absolute bottom-[calc(50%-16px)] left-[calc(50%-16px)]`} />
}