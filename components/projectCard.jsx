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
import Link from "next/link";
import { deleteProyect } from "@/utils/deleteProyect";

export default function ProjectsCard({
  id,
  name,
  description,
  isComplete,
  tags,
  imageUrl,
  link,
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
    deleteProyect(id).then(() => {
      router.refresh();
    });
  };

  return (
    <div className="bg-box group overflow-hidden rounded-medium w-[300px] max-w-[300px] h-[400px] transition-all duration-500 border-gray-700 hover:border-gray-400 border-2 flex flex-col gap-[10px]">
      <div className="relative w-full h-[150px] overflow-hidden">
        <ImageHandler
          src={imageUrl}
          alt="Descripción de la imagen"
          width={300}
          className={"order-first lg:order-last rounded-b-none"}
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
                    Edit project
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    onPress={onOpen}
                  >
                    Delete Project
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

      <Link href={link} className="m-[10px] mt-auto">
        <Button
          color="primary"
          className="w-full font-bold hover:bg-hover-action"
        >
          Learn more
        </Button>
      </Link>

      {admin ? (
        <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Confirm to delete
                </ModalHeader>
                <ModalBody className="text-slate-400">
                  Are you sure you want to delete this Project? This action
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
