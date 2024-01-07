import { ReactNode } from "react";
import "./layout.css"

interface LayoutProps {
    children?: ReactNode
}

export function FourCol({ children = "" }: LayoutProps) {
    return (
        <div className="fourCol">
            {children}
        </div>
    )
}