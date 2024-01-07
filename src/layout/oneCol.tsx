import { ReactNode } from "react"
import "./layout.css"

interface LayoutProps {
    children?: ReactNode
}

export function OneCol({ children = "" }: LayoutProps) {
    return (
        <div className="oneCol">
            {children}
        </div>
    )
}