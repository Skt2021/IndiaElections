import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./CategoryButton.css";

export default function CategoryButton(props) {

    const clickHandler = () =>{
        props.onClick(props.data[0]);
    }

    return (
        <div className="category-button-container" onClick={clickHandler}>
            <FontAwesomeIcon icon={props.data[1]} />
            <p className="category-button-text">{props.data[0]}</p>
        </div>
    )
}
