/* eslint-disable prettier/prettier */
export type SiteConfig = typeof siteConfig;
import { SiFacebook, SiInstagram ,SiWhatsapp   } from "react-icons/si";

const myDescription = "Soy Nicolás Cuervo, un apasionado del arte, la naturaleza y las buenas vibras. Como artista plástico especializado en tatuaje, llevo más de seis años perfeccionando mi técnica y explorando nuevas formas de expresión. Para mí, un tatuaje va más allá de la tinta en la piel; es una manifestación de identidad, una historia que merece ser contada con cada trazo. Trabajo de la mano con cada persona, escuchando sus ideas y aportando mi visión profesional para crear diseños que no solo reflejen su esencia, sino que también se adapten armoniosamente a su anatomía. Cada proyecto es un estudio personalizado, donde la estética y la forma del cuerpo se combinan para dar vida a piezas únicas y atemporales. Mi objetivo es que cada tatuaje sea una experiencia inolvidable, un viaje de autodescubrimiento y transformación. Si estás buscando un tatuador que te acompañe en este proceso, ¡estás en el lugar correcto!";

export const siteConfig = {
  name: "Next.js + HeroUI",
  // description: "Make beautiful websites regardless of your design experience.",
  description: myDescription,
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/docs",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    // github: "https://github.com/heroui-inc/heroui",
    // twitter: "https://twitter.com/hero_ui",
    // docs: "https://heroui.com",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
    instagram: "https://www.instagram.com/nicolascuervo.art",
    facebook: "https://www.facebook.com/p/Nicolas-Cuervo-Artattoo-100063509052686/",
    whatsapp: "https://wa.link/xbwcyh",
  },


};

export const iconInstagram = SiInstagram ;
export const iconFacebook = SiFacebook;
export const iconWhatsapp = SiWhatsapp

export const socials = [
  {
      link: "https://www.instagram.com/nicolascuervo.art",
      label: "Instagram",
      Icon: iconInstagram
  },
  {

      link: "https://www.facebook.com/p/Nicolas-Cuervo-Artattoo-100063509052686/",
      label: "Facebook",
      Icon: iconFacebook
  },
  {

    link: "https://wa.link/xbwcyh",
    label: "WhatsApp",
    Icon: iconWhatsapp
},

];