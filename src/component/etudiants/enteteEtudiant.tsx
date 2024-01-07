import { FourCol } from "../../layout/fourCol";
import { Title } from "../atome/title";

export function EnteteEtudiant() {
    return (
        <FourCol>
            <Title>ID</Title>
            <Title>NOM</Title>
            <Title>PRENOM</Title>
            <Title>Option</Title>
        </FourCol>
    )
}