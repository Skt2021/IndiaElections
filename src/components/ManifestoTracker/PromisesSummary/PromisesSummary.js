import React from 'react'
import './PromisesSummary.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

function PromisesSummary(props) {
    return (
        <div className="summary-container">
            <div className="summary-container-box">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <p className="summary-text"><b>BJP's Days in Central Government: 2522</b></p>
            </div>
            {
                Object.entries(props.data).map((status)=>
                    <div className="summary-container-box" style={{"backgroundColor":`${status[1].color}`}}>
                        <FontAwesomeIcon icon={status[1].icon} />
                        <p className="summary-text">{status[0]}: 6 of 101</p>
                    </div>
                )
            }
            
        </div>
    )
}

export default PromisesSummary
