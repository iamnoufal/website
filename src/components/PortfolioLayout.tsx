import Heading from "./Heading"

interface PortfolioLayoutProps {
  title: string
  subtitle: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function PortfolioLayout({
  title,
  subtitle,
  style,
  children,
}: PortfolioLayoutProps) {
  return (
    <div
      className="min-h-screen w-full bg-center"
      style={style}
    >
      <div className={`
        flex items-center justify-center text-center flex-col
        ${children ? 'h-screen' : 'h-screen'}
      `}>
        <Heading variant="h1" component="h1">
          {title}
        </Heading>
        <Heading variant="h6" component="h2" delay={0.5}>
          {subtitle}
        </Heading>
      </div>
      {children}
    </div>
  )
}
