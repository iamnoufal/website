import {
  Dancing_Script,
  Lora,
  Merriweather,
  Montserrat,
  Satisfy,
  Shadows_Into_Light,
} from "next/font/google";

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-dancing-script",
  preload: true,
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: "400",
  display: "swap",
  preload: true,
  variable: "--font-satisfy"
})

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
  preload: true,
  variable: "--font-lora",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  preload: true,
  variable: "--font-merriweather",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: true,
  display: "swap",
  variable: "--font-montserrat"
})

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  variable: "--font-shadows-into-light",
  preload: true,
  weight: "400",
  display: "swap"
})

export { dancing_script, lora, merriweather, montserrat, shadowsIntoLight}