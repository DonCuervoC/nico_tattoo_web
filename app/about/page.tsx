/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";
"use client";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-2">
      {/* Sección principal con flexbox, centrado de elementos y espacio entre ellos */}
      <div className="absolute inset-0 z-0">
        {/* Contenedor absoluto que ocupa todo el espacio disponible */}
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-10">
          {/* Fondo con gradiente radial y opacidad ajustada */}
          <Image
            alt="Background02"
            src="/background/backg-04.jpg"
            fill
            style={{ objectFit: 'cover', opacity: 0.9 }}
            quality={100}
          />
        </div>
      </div>
      <div className="relative z-10 inline-block max-w-6x1 text-center">
        {/* Contenedor principal con posición relativa, z-index, y centrado de texto */}
        <span className={title()}>TATTOO&nbsp;</span>
        <span className={title({ color: "yellow" })}>ARTIST&nbsp;</span>
        <br />
        <br />
        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          {/* Contenedor flex con dirección de columna en pantallas pequeñas y fila en medianas y grandes */}
          <div className="flex-shrink-0 w-full ">
            {/* Contenedor de imagen con tamaño ajustable */}
            <Image
              alt="Nicolas-Cuervo"
              height={400} // Tamaño de la imagen
              src="/nicolas/IMG_2074.JPG" // Usando la URL pasada en la prop `src`
              width={400} // Tamaño de la imagen
              className="w-full h-auto" // Ajuste responsivo
            />
          </div>
          <div className="flex-shrink-0 w-full md:w-2/3">
            {/* Contenedor de texto con tamaño ajustable */}
            <p className="text-justify" style={{ fontFamily: 'var(--font-roboto)' }}>
              {siteConfig.description}
            </p>
            <span className={title()}>
              <span className={title({ color: "yellow" })}>Arte&nbsp;</span>
              {/* <span className={title({ color: "blue" })}>que habla, tinta que</span> */}
              <span className={title()}>que habla, tinta que&nbsp;</span>
              {/* <span className="text-white"> que habla, tinta que </span> */}
              <span className={title({ color: "violet" })}> trasciende.&nbsp;</span>
            </span>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}