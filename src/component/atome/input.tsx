import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import "./input.css"

interface InputProps {
    type: HTMLInputTypeAttribute
    value: string | number
    change: ChangeEventHandler<HTMLInputElement>
    placeholder: string
}

export function Input({ type, value, change, placeholder }: InputProps) {
    return <input className="jdeInput" type={type} value={value} placeholder={placeholder} onChange={change} />
}
