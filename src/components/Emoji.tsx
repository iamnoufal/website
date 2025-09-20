import { cn } from "@/utils/cn"
import { CSSProperties } from "react"

interface EmojiProps {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
}

export default function Emoji({ children, style, className }: EmojiProps) {
  return (
    <span 
      role="img" 
      aria-label="emoji" 
      style={style} 
      className={cn("font-sans", className)}
    >
      {children}
    </span>
  )
}