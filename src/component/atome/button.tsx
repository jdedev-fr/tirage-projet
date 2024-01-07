import { MouseEventHandler } from "react"
import "./button.css"

interface ButtonProps {
    content: string
    change: MouseEventHandler<HTMLButtonElement>
    color?: string
}

export function Button({ content, change, color = "royalblue" }: ButtonProps) {
    return <button className="jdeButton" style={{ backgroundColor: color }} onClick={change}>{content}</button>
}