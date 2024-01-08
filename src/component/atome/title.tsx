import { ReactNode } from "react";
import "./title.css"

interface TitleProps {
    children: ReactNode
}
export function Title({ children }: TitleProps) {
    return <h2 className="jdeTitle">{children}</h2>
}