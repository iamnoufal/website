import { Metadata } from "next";
import PortfolioLayout from "@/components/PortfolioLayout";

export const metadata: Metadata = {
  title: "Noufal's Sanctum",
  description: "A well crafted portfolio of Noufal Rahman",
};

export default function Home() {
  return (
    <main>
      <PortfolioLayout
        title="I'm Noufal Rahman"
        subtitle="01001000 01100101 01101100 01101100 01101111 00100000 11110000 10011111 10010001 10001011"
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
