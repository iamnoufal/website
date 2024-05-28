import Image from "next/image";
import styles from "./page.module.css";
import Theme from "@/theme/Provider";
import PortfolioNav from "@/components/PortfolioNav";
import PortfolioLayout from "@/components/PortfolioLayout";
import { lora, montserrat } from "@/theme/fonts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PortfolioLayout
        title="Blog"
        subtitle="Turning Coffee into Code, One Cup at a Time"
        style={{
          background: `
            linear-gradient(0deg, black, transparent 100%), 
            linear-gradient(300deg, #08083a, transparent 21%), 
            linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), 
            linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)
        `,
        }}
      />
    </main>
  );
}
