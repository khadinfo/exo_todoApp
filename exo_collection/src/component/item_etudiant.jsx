import PropTypes from 'prop-types';

import style from './style-etudiant/style-etudiant.module.css'

const EtudiantTableItem = (props) => {
    const {name, prenom,option,sexe,resultat} = props;
    let colorResultat;
    if(resultat<50){
    colorResultat=style.echec;
    }else if(resultat===null){
    colorResultat=style.notResult;
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{prenom} </td>
            <td>{option}</td>
            <td>{sexe}</td>
            <td className={colorResultat}>{resultat}</td>
        </tr>
    )
}

EtudiantTableItem.propTypes = {
    name: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    sexe: PropTypes.string.isRequired,
    resultat: PropTypes.number
}

EtudiantTableItem.defaultProps={
    resultat:"Pas de résultat"
}

export default EtudiantTableItem