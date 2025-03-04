// eslint-disable-next-line prettier/prettier
import { Fira_Code as FontMono, Inter as 
  FontSans, Open_Sans, Roboto, Merriweather, Great_Vibes, Roboto_Mono, Monsieur_La_Doulaise ,
Mrs_Saint_Delafield
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const fontRobotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["100", "300", "400", "500", "700"],
});

export const fontOpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "700", "900"],
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

export const monsieurLaDoulaise = Monsieur_La_Doulaise({
  subsets: ["latin"],
  variable: "--font-monsieur-la-doulaise",
  weight: "400",
});

export const mrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-mrs-saint-delafield",
  weight: "400",
});
