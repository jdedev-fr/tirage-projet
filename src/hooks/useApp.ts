import { useState } from "react"
import { IEtudiant } from "../interface"

export function useApp() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [nbParEquipe, setNbParEquipe] = useState(0)
    const [etudiants, setEtudiants] = useState<IEtudiant[]>([])
    const [equipes, setEquipes] = useState<IEtudiant[][]>([])
    const generateId = () => etudiants.length > 0 ? etudiants[etudiants.length - 1].id + 1 : 1
    const addEtudiant = () => {
        const etudiantsCopie = [...etudiants]
        etudiantsCopie.push({
            id: generateId(),
            nom,
            prenom
        })
        setEtudiants(etudiantsCopie)
    }
    const removeEtudiant = (id: number) => {
        const etudiantsCopie = [...etudiants]
        const index = etudiantsCopie.findIndex((e) => e.id === id)
        if (index != -1) {
            etudiantsCopie.splice(index, 1)
            setEtudiants(etudiantsCopie)
        }
    }
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }
    const distribUser = (nb: number) => {
        const tabEquipe: IEtudiant[][] = []
        const userDistrib = [...etudiants]
        if (nb > 0) {
            while (userDistrib.length > 0) {
                if (userDistrib.length >= nb) {
                    const userEquipe: IEtudiant[] = []
                    for (let i = 0; i < nb; i++) {
                        const index = getRandomInt(userDistrib.length)
                        userEquipe.push(userDistrib.splice(index, 1)[0])
                    }
                    tabEquipe.push(userEquipe)
                }
                else {
                    if (tabEquipe.length == 0) {
                        tabEquipe.push([])
                    }
                    const index = getRandomInt(tabEquipe.length)
                    tabEquipe[index].push(userDistrib.splice(0, 1)[0])
                }
            }
            setEquipes(tabEquipe)
        }
    }
    return { nom, prenom, etudiants, nbParEquipe, equipes, setNom, setPrenom, addEtudiant, removeEtudiant, setNbParEquipe, distribUser }
}