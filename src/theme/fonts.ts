import {
  Dancing_Script,
  Inter,
  Lora,
  Merriweather,
  Montserrat,
  Montserrat_Alternates,
  Montserrat_Subrayada,
  Satisfy,
  Shadows_Into_Light,
} from "next/font/google";

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  display: "auto",
  variable: "--font-dancing-script",
  preload: true,
})
const inter = Inter({ subsets: ["latin"] });

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: "400",
  display: "auto",
  preload: true,
  variable: "--font-satisfy"
})

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  display: "auto",
  preload: true,
  variable: "--font-lora",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  display: "auto",
  preload: true,
  variable: "--font-merriweather",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: true,
  display: "auto",
  variable: "--font-montserrat"
})

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  variable: "--font-shadows-into-light",
  preload: true,
  weight: "400",
  display: "auto"
})

export { dancing_script, lora, merriweather, montserrat, shadowsIntoLight}