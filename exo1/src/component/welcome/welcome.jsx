import PropTypes from 'prop-types';

import style from './style-component.module.css'

const Welcome =function(props){
    const {nom,age}=props;

    return (
        <div> <h1> Bienvenue <span className={style.nom}>{nom}</span></h1>
        <p>vous avez <span className={style.age}>{age}</span></p></div>
    )
}

ElementStyle.defaultProps={
    age:18
}

ElementStyle.prototype={
    age: PropTypes.number,
    nom: PropTypes.string
}

export default Welcome;