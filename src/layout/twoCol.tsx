import { ReactNode } from "react";
import "./layout.css"

interface LayoutProps {
    children?: ReactNode
}

export function TwoCol({ children = "" }: LayoutProps) {
    return (
        <div className="twoCol">
            {children}
        </div>
    )
}