"use client";
import {
  Chip,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
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
  const router = useRouter();
  const maxDescriptionCharacters = 120;
  const maxNameCharacters = 9;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const fixedName =
    name.length > maxNameCharacters
      ? name.slice(0, maxNameCharacters - 3).concat("...")
      : name;

  const fixedDescription =
    description.length > maxDescriptionCharacters
      ? description.slice(0, maxDescriptionCharacters - 3).concat("...")
      : description;

  const editHandler = () => {
    router.push(`/dashboard/proyect/edit/${id}`);
  };

  const deleteHandler = async () => {
    fetch(`/dashboard/proyect/delete/${id}`).then(() => {
      router.refresh();
    });
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
            {fixedName}
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
                  <DropdownItem key="edit" onPress={editHandler}>
                    Edit proyect
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    onPress={onOpen}
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

      {admin ? (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Confirm to delete
                </ModalHeader>
                <ModalBody className="text-slate-400">
                  Are you sure you want to delete this Proyect? This action
                  cannot be undone.
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant={"light"} onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="danger" onPress={deleteHandler}>
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
