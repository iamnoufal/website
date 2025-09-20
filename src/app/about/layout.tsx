import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Noufal Rahman",
  description: "Learn more about Noufal Rahman - Full Stack Developer and UI/UX Designer",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 