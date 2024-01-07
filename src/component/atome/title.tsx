import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}
export function Title({ children }: TitleProps) {
    return <h2 className="jdeTitle">{children}</h2>
}