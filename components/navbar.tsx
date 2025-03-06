/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
// import { Button } from "@heroui/button";

import { Link } from "@heroui/link";

import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  // HeartFilledIcon,
  // SearchIcon,
  Logo,

} from "@/components/icons";

import { socials } from "@/config/site";


export const Navbar = () => {

  return (
    <HeroUINavbar className="mt-4" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo size={180} src="/others/tattoo-05.png" />
            {/* <p className="font-bold text-inherit" style={{ fontFamily: 'var(--font-roboto)' }}>Nicolas Cuervo</p> */}
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={
                  
                  clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:scale-125 hover:text-yellow-500  transition-all",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">

                {socials.map((social, index) => {
                    const Icon = social.Icon;

                    return (
                        <Link key={index} aria-label={social.label} href={social.link}>
                            <Icon className='w-5 h-5 text-gray-400 hover:scale-125 hover:text-yellow-500  transition-all' />
                        </Link>
                    );
                })}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

        <ThemeSwitch />
        <NavbarMenuToggle className="text-orange-500  hover:text-red-500  transition-all" /> 
      </NavbarContent>

      <NavbarMenu className="top-10 left-64 w-3/10 h-full"> 
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <br/>
          <br/>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="hover:scale-125 hover:text-yellow-500  transition-all"
                color="foreground"
                href={item.href} 
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};