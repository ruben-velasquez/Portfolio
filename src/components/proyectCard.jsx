"use client";
import {
  Chip,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SlOptionsVertical } from "react-icons/sl";
import ImageHandler from "./imageHandler";
import { useRouter } from "next/navigation";

export default function ProyectCard({
  id,
  name,
  description,
  isComplete,
  tags,
  imageUrl,
  admin = false,
}) {
  const router = useRouter()
  const maxCharacters = 120;

  const fixedDescription = description
    .slice(0, maxCharacters - 3)
    .concat("...");

  const editHandler = (e) => {
    router.push(`/dashboard/proyect/edit/${id}`)
  };

  return (
    <div className="bg-box group overflow-hidden rounded-medium max-w-[300px] h-[400px] transition-all duration-500 border-gray-700 hover:border-gray-400 border-2 flex flex-col gap-[10px]">
      <div className="relative">
        <ImageHandler
          src={imageUrl}
          alt="Descripción de la imagen"
          className={
            "order-first lg:order-last w-full rounded-b-none max-h-[170px] object-fill"
          }
        ></ImageHandler>
        <div className="z-10 absolute top-1 right-1 flex flex-row-reverse gap-1">
          {tags.map((tag, index) => (
            <Chip
              key={index}
              color="default"
              variant="bordered"
              className={`z-20 bg-gray-900 text-gray-200w-full font-bold`}
              size="sm"
            >
              {tag.name}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[10px] mx-[10px]">
        <div className="flex flex-row justify-between items-start">
          <h1 className="font-bold text-lg text-slate-400 transition-all duration-700 group-hover:text-slate-50">
            {name}
          </h1>
          <div className="flex flex-row gap-[10px] items-center">
            {isComplete ? (
              <Chip color="success" size="sm">
                Is Complete
              </Chip>
            ) : (
              <Chip color="default" size="sm">
                In progress
              </Chip>
            )}
            {admin ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    isIconOnly
                    size="sm"
                    color="primary"
                    aria-label="Like"
                  >
                    <SlOptionsVertical />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit" onPress={editHandler}>Edit proyect</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete Proyect
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <></>
            )}
          </div>
        </div>
        <p className="text-slate-500 text-base transition-all duration-700 group-hover:text-slate-400">
          {fixedDescription}
        </p>
      </div>

      <Button
        color="primary"
        className="m-[10px] mt-auto font-bold hover:bg-hover-action"
      >
        Learn more
      </Button>
    </div>
  );
}
