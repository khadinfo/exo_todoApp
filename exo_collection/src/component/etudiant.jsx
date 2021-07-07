import PropTypes from 'prop-types';
import EtudiantTableItem from './item_etudiant';

const Etudiant = (props) => {

    const TabEtudiant = props.etudiants.map(
        p => <EtudiantTableItem key={p.id} {...p} />
    );

    return (
        <>
            <h2>Liste des etudiants</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Option</th>
                         <th>Sexe</th> 
                         <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {TabEtudiant}
                </tbody>
            </table>
        </>
    )
}

Etudiant.propTypes = {
    etudiants: PropTypes.array
}

export default Etudiant;