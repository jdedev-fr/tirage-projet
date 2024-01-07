import { IEtudiant } from "../../interface";
import { OneCol } from "../../layout/oneCol";
import { Title } from "../atome/title";
import { EnteteEtudiant } from "./enteteEtudiant";
import { Etudiant } from "./etudiant";

interface listeEtudiantProps {
    etudiants: IEtudiant[]
    removeEtudiant: (id: number) => void
}
export function ListeEtudiants({ etudiants, removeEtudiant }: listeEtudiantProps) {
    return (
        <OneCol>
            <Title>Liste des étudiants</Title>
            <EnteteEtudiant />
            {etudiants.map(etudiant => <Etudiant key={etudiant.id} etudiant={etudiant} supp={removeEtudiant} />)}
        </OneCol>
    )
}