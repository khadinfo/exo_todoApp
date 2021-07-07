import PropTypes from 'prop-types';

import style from './style-module/style-etudiant.module.css';

const EtudiantTableItem = (props) => {
    const {name, prenom,option,sexe,resultat} = props;
    let colorResultat;
    if(resultat<50){
    colorResultat="<td className={style.echec}>{resultat}/100</td>";
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{prenom} </td>
            <td>{option}</td>
            <td>{sexe}</td> +
             {colorResultat}
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