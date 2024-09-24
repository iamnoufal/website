import { montserrat } from "@/theme/fonts"
import { CSSProperties } from "react"

const Emoji = ({ children, style } : { children: React.ReactNode, style?: CSSProperties}) => {
  return <span role="img" aria-label="emoji" style={style} className={montserrat.className}>{children}</span>
}

export default Emoji