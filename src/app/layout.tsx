import Footer from "@/components/Footer"
import LenisProvider from "@/components/LenisProvider"
import ModernNav from "@/components/Nav"
import PageTransition from "@/components/PageTransition"
import { dancing_script, lora, merriweather, montserrat, satisfy, shadowsIntoLight } from "@/theme/fonts"
import dynamic from 'next/dynamic'
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css"

// Lazy load SpotifyWidgetWrapper to prevent server-side loading and reduce initial bundle
const SpotifyWidgetWrapper = dynamic(() => import("@/components/SpotifyWidgetWrapper"), {
  ssr: false, // Don't render on server to prevent API calls during startup
  loading: () => null // No loading state to prevent layout shift
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '900']
})

export const metadata = {
  title: 'Noufal Rahman - Full Stack Developer',
  description: 'Portfolio of Noufal Rahman - Full Stack Developer, UI/UX Designer, and Problem Solver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing_script.variable} ${lora.variable} ${merriweather.variable} ${montserrat.variable} ${shadowsIntoLight.variable} ${satisfy.variable}`}>
      <body className="font-inter">
        <LenisProvider>
          <ModernNav />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <SpotifyWidgetWrapper />
        </LenisProvider>
      </body>
    </html>
  )
}
