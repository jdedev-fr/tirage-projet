import './App.css'
import { AjoutUserForm } from './component/form/ajoutUserForm'
import { ListeEtudiants } from './component/etudiants/listeEtudiants'
import { DistribUserForm } from './component/form/distribUserForm'
import { ListeEquipes } from './component/equipes/listeEquipes'
import { Br } from './component/atome/br'
import { useApp } from './hooks/useApp'

function App() {
  const { nom, prenom, etudiants, nbParEquipe, equipes, setNom, setPrenom, addEtudiant, removeEtudiant, setNbParEquipe, distribUser } = useApp()
  return (
    <>
      <AjoutUserForm nom={nom} prenom={prenom} setNom={setNom} setPrenom={setPrenom} addEtudiant={addEtudiant} />
      {etudiants.length > 0 &&
        <>
          <Br />
          <ListeEtudiants etudiants={etudiants} removeEtudiant={removeEtudiant} />
          <Br />
          <DistribUserForm nb={nbParEquipe} change={(e) => setNbParEquipe(+e.target.value)} distribuer={() => distribUser(nbParEquipe)} />
          {equipes.length > 0 && <><Br /><ListeEquipes equipes={equipes} /></>}
        </>}
    </>
  )
}

export default App
