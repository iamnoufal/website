import { Metadata } from "next";
import HomeContent from "@/components/Home";

export const metadata: Metadata = {
  title: "Noufal's Portfolio",
  description: "A well crafted portfolio of Noufal Rahman",
};

export default function Home() {
  return (
    <main>
      <HomeContent />
    </main>
  );
}
