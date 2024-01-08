import { MouseEventHandler } from "react"
import "./button.css"

interface ButtonProps {
    content: string
    change: MouseEventHandler<HTMLButtonElement>
    color?: string
}

export function Button({ content, change, color = "primary" }: ButtonProps) {
    return <button className={"jdeButton " + color} onClick={change}>{content}</button>
}