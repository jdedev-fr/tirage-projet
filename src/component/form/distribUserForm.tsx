import { ChangeEventHandler } from "react";
import { OneCol } from "../../layout/oneCol";
import { TwoCol } from "../../layout/twoCol";
import { Button } from "../atome/button";
import { Input } from "../atome/input";
import { Title } from "../atome/title";

interface distribUserProps {
    nb: number
    change: ChangeEventHandler<HTMLInputElement>
    distribuer: () => void
}
export function DistribUserForm({ nb, change, distribuer }: distribUserProps) {
    return (
        <OneCol>
            <Title>Distribution des étudiants</Title>
            <TwoCol>
                <Input type="number" value={nb} change={change} placeholder="Entrez un nombre" />
                <Button content="Distribuer" change={() => distribuer()} />
            </TwoCol>
        </OneCol>
    )
}