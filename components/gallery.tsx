/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
'use client';
import { useState, useEffect } from "react";
import { inc_works } from "@/config/galleries";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useDisclosure } from "@heroui/modal";
import ImageModal from "./image_modal";
import { title } from "./primitives";
// import Image from "next/image";

interface ImageType {
  src: string;
  dsc: string;
  name: string;
}

export default function GalleryPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpenModal = (image: ImageType) => {
    setSelectedImage(image);
    onOpen();
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-1">
                <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 
                      bg-gradient-radial
                       from-black via-transparent
                        to-black opacity-10">
                          
                        <Image
                          alt="Background02"
                          src="/background/backg-05.jpg"
                        //   layout="fill"
                        //   objectFit="cover"
                        //   quality={100}
                        //   style={{ opacity: 0.9 }}
                        />
                      </div>
                    </div>
      {/* <h1 className="text-4xl font-bold mb-8">Galería de Arte</h1> */}
                  <span className={title()}>
                  <span className="text-white">Galería de </span>
                    <span className={title({ color: "yellow" })}>Arte</span>
                  </span>
                  <br/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {inc_works.map((image, index) => (
          <Card key={index} isFooterBlurred className="overflow-hidden border-none" radius="lg">
            <Image
              isBlurred={true}
              src={image.src}
              alt={image.dsc}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
                onPress={() => handleOpenModal(image)}
              >
                Display
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <ImageModal isOpen={isOpen} onClose={onOpenChange} image={selectedImage} />
    </section>
  );
}