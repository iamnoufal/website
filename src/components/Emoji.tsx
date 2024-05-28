import { montserrat } from "@/theme/fonts"

const Emoji = ({ children } : { children: React.ReactNode}) => {
  return <span role="img" aria-label="emoji" className={montserrat.className}>{children}</span>
}

export default Emoji