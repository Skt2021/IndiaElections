import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Button.css';

function Button(props) {

    const ClickHandler = () => {
        props.onClick();
    }

    return (
        <div className="home-button" onClick={props.onClick}>
            <p className="home-button-text">{props.Name}</p>
            <FontAwesomeIcon className="home-button-icon" icon={faArrowRight} />
        </div>
    )
}

export default Button;
