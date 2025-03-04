/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import {Link} from "@heroui/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-1">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-20">
          <Image
            alt="Background"
            src="/background/backg-02.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ opacity: 0.9 }}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-1">
        <div>
          <Image
            alt="Logo"
            height={500} // Tamaño de la imagen
            src="/logo/NACC LOGO-01.png" // Usando la URL pasada en la prop `src`
            width={500} // Tamaño de la imagen
          />
        </div>
        <h1 className="relative text-6xl mt-2" style={{ fontFamily: 'var(--font-mrs-saint-delafield)' }}>Nicolas Cuervo</h1>
           <div className="mt-8 gap-8 text-center max-w-xl">
           <Snippet hideCopyButton hideSymbol variant="bordered" style={{ border: '1px solid purple' }}>
            <div className="text-justify">
              {/* Agenda tu cita : <Code color="primary">app/page.tsx</Code> */}
              Agenda tu cita : <Code color="primary">
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://wa.link/xbwcyh"
                >
                  WhatsApp
                </Link>
              </Code>
            </div>
          </Snippet>
      </div>
      </div>
    </section>
  );
}