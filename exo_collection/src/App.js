import logo from './logo.svg';
import './App.css';
import {nanoid} from 'nanoid';
import EtudiantTableItem from './component/item_etudiant';
import Etudiant from './component/etudiant';

function App() {

  const etudiants = [
    {
      id: nanoid(),
      name: 'Srhir',
      prenom:'Khadija',
      sexe:'F',
      option:'Informatique',
      resultat:70
    },
    {
      id: nanoid(),
      name: 'Chak',
      prenom:'Lina',
      sexe: 'F',
      option:'Medecine',
      resultat:80

    },
    { id: nanoid(),
      name:'Einstein',
      prenom:'Albert',
      sexe:'M',
      option:'Physicien',
      resultat:100
   },
   { id: nanoid(),
    name:'chico',
    prenom:'chico',
    sexe:'M',
    option:'Physicien',
    resultat:30
 }]



  return (
    <div className="App">
      <Etudiant etudiants={etudiants} />
    </div>
  );
}

export default App;
