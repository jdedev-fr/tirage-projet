import { IEtudiant } from "../../interface";
import { OneCol } from "../../layout/oneCol";
import { Title } from "../atome/title";
import "./equipe.css"

interface equipeProps {
    numEquipe: number
    etudiants: IEtudiant[]
}
export function Equipe({ numEquipe, etudiants }: equipeProps) {
    return (
        <article className="card">
            <OneCol>
                <Title>Equipe N°{numEquipe}</Title>
                {etudiants.map(etudiant => <p>{etudiant.nom} {etudiant.prenom}</p>)}
            </OneCol>
        </article>
    )
}