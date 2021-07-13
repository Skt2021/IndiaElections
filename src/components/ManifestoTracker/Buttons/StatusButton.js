import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./StatusButton.css";

function StatusButton(props) {

    const clickHandler = () => {
        props.onClick(props.data[0]);
    }

    return (
        <div className="status-button-container" style={{"backgroundColor":`${props.data[1].color}`}} onClick={clickHandler}>
            <FontAwesomeIcon icon={props.data[1].icon} />
            <p className="status-button-text">{props.data[0]}</p>
        </div>
    )
}

export default StatusButton
