import { Dancing_Script, Inter, Satisfy } from "next/font/google";
import localFont from "next/font/local"

export const dancing_script = localFont({ src: '../assets/fonts/DancingScript-VariableFont_wght.ttf' })
export const inter = Inter({ subsets: ['latin'] })
// export const satisfy = Satisfy({ weight: "400", subsets: ['latin'], style: "normal" })

export const satisfy = localFont({ src: '../assets/fonts/Satisfy-Regular.ttf' })