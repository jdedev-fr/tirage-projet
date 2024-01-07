import { useState } from 'react'
import './App.css'
import { IEtudiant } from './interface'
import { AjoutUserForm } from './component/form/ajoutUserForm'
import { ListeEtudiants } from './component/etudiants/listeEtudiants'
import { DistribUserForm } from './component/form/distribUserForm'
import { ListeEquipes } from './component/equipes/listeEquipes'

function App() {
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
  return (
    <>
      <AjoutUserForm nom={nom} prenom={prenom} setNom={setNom} setPrenom={setPrenom} addEtudiant={addEtudiant} />
      {etudiants.length > 0 &&
        <>
          <ListeEtudiants etudiants={etudiants} removeEtudiant={removeEtudiant} />
          <DistribUserForm nb={nbParEquipe} change={(e) => setNbParEquipe(+e.target.value)} distribuer={() => distribUser(nbParEquipe)} />
          {equipes.length > 0 && <ListeEquipes equipes={equipes} />}
        </>}
    </>
  )
}

export default App
