/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { inc_works } from "@/config/galleries";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
// import Image from "next/image";

export default function GalleryPage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-1">
            <h1 className="text-4xl font-bold mb-8">Galería de Arte</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

                {inc_works.map((image, index) => (
                    <Card key={index}
                        isFooterBlurred
                        className="overflow-hidden border-none"
                        radius="lg"
                    >
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
                            >
                                Display
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
