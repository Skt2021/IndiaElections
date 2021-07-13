import React from 'react';
import './GovernmentList.css';
import GovernmentCard from './GovernmentCard/GovernmentCard'

function GovernmentList(props) {
    return (
        <div className="government-list-container">
            <GovernmentCard ClickHandler={props.ClickHandler} value={props.value}/>

        </div>
    )
}

export default GovernmentList
