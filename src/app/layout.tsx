import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { montserrat, lora } from "@/theme/fonts";
import PortfolioNav from "@/components/PortfolioNav";
import Theme from "@/theme/Provider";
import Footer from "@/components/Footer";
import ScrollBehaviour from "@/helpers/ScrollBehaviour";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[montserrat.variable, lora.variable].join(" ")}>
        <ScrollBehaviour>
          <Theme>
            <Nav />
            {children}
            <PortfolioNav />
            <Footer />
          </Theme>
        </ScrollBehaviour>
      </body>
    </html>
  );
}
