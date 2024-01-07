import { ReactElement, ReactPortal } from "react"

export interface IEtudiant {
    id: number
    nom: string
    prenom: string
}

export type ReactText = string | number
export type ReactChild = ReactElement | ReactText

export interface ReactNodeArray extends Array<ReactNode> { }
export type ReactFragment = {} | ReactNodeArray
export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined 