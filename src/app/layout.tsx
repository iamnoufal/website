import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { montserrat, lora } from "@/theme/fonts";
import PortfolioNav from "@/components/PortfolioNav";
import Theme from "@/theme/Provider";
import Footer from "@/components/Footer";
import favicon from "@/assets/images/favicon.ico"

export const metadata: Metadata = {
  icons: {
    icon: favicon.src
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[montserrat.variable, lora.variable].join(" ")}>
        <Theme>
          <Nav />
          {children}
          <PortfolioNav />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
