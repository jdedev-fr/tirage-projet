import { OneCol } from "../../layout/oneCol";
import { ThreeCol } from "../../layout/threeCol";
import { Button } from "../atome/button";
import { Input } from "../atome/input";
import { Title } from "../atome/title";

interface ajoutUserFormProps {
    nom: string
    prenom: string
    setNom: (nom: string) => void
    setPrenom: (prenom: string) => void
    addEtudiant: () => void
}

export function AjoutUserForm({ nom, prenom, setNom, setPrenom, addEtudiant }: ajoutUserFormProps) {
    return (
        <OneCol>
            <Title>Ajoutez un étudiant</Title>
            <ThreeCol>
                <Input value={nom} change={(e) => setNom(e.target.value)} type='text' placeholder='entrez un nom' />
                <Input value={prenom} change={(e) => setPrenom(e.target.value)} type='text' placeholder='entrez un prenom' />
                <Button content='Ajouter' change={() => addEtudiant()} />
            </ThreeCol>
        </OneCol>
    )
}