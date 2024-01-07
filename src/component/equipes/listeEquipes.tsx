import { IEtudiant } from "../../interface";
import { FourCol } from "../../layout/fourCol";
import { OneCol } from "../../layout/oneCol";
import { Title } from "../atome/title";
import { Equipe } from "./equipe";

interface listeEquipesProps {
    equipes: IEtudiant[][]
}
export function ListeEquipes({ equipes }: listeEquipesProps) {
    return (
        <OneCol>
            <Title>Liste des équipes</Title>
            <FourCol>
                {equipes.map((equipe, index) => <Equipe key={index} numEquipe={index + 1} etudiants={equipe} />)}
            </FourCol>
        </OneCol>
    )
}