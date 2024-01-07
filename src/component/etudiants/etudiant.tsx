import { IEtudiant } from "../../interface";
import { FourCol } from "../../layout/fourCol";
import { Button } from "../atome/button";

interface etudiantProps {
    etudiant: IEtudiant
    supp: (id: number) => void
}

export function Etudiant({ etudiant, supp }: etudiantProps) {
    return (
        <FourCol>
            <p>{etudiant.id.toString()}</p>
            <p>{etudiant.nom}</p>
            <p>{etudiant.prenom}</p>
            <Button content="supprimer" change={() => supp(etudiant.id)} />
        </FourCol>
    )
}