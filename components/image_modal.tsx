/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "@heroui/modal";
import { Image } from "@heroui/image";
import { FC } from "react";
import { Button } from "@heroui/button";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    dsc: string;
    name: string;
  } | null;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">{image.name}</ModalHeader>
          <ModalBody>
            <Image
              src={image.src}
              alt={image.dsc}
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
            <p className="mt-4">{image.dsc}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;