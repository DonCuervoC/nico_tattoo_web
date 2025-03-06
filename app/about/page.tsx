/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
              bg-gradient-radial
               from-black via-transparent
                to-black opacity-10">

          <Image
            alt="Background02"
            src="/background/backg-04.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ opacity: 0.9 }}
          />
        </div>
      </div>
      <div className="irelative z-10 inline-block max-w-4xl text-center">
        <span className={title()}>TATTOO&nbsp;</span>
        <span className={title({ color: "yellow" })}>ARTIST&nbsp;</span>
        <br />
        <br />
        <div className="flex flex-row justify-center items-start gap-4">
          <div className="flex-shrink-0" style={{ width: '400px' }}>
            <Image
              alt="Nicolas-Cuervo"
              height={400} // Tamaño de la imagen
              src="/nicolas/IMG_2074.JPG" // Usando la URL pasada en la prop `src`
              width={400} // Tamaño de la imagen
            />
          </div>
          <div className="flex-shrink-0" style={{ width: '420px' }}>
            <p className={`text-justify`} style={{ fontFamily: 'var(--font-roboto)' }}>
              {siteConfig.description}
            </p>
            <span className={title()}>
              <span className={title({ color: "yellow" })}>Arte</span>
              <span className="text-white"> que habla, tinta que </span>
              <span className={title({ color: "violet" })}>trasciende.</span>
            </span>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}