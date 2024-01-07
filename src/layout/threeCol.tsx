import { ReactNode } from "react";
import "./layout.css"

interface LayoutProps {
    children?: ReactNode
}

export function ThreeCol({ children = "" }: LayoutProps) {
    return (
        <div className="threeCol">
            {children}
        </div>
    )
}