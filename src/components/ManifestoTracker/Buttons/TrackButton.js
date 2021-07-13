import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './TrackButton.css';

function TrackButton(props) {
    return (
        <div className="track-button-container" onClick={props.clickHandler}>
            <p>Track Here</p>
            <FontAwesomeIcon className="home-button-icon" icon={faArrowRight} />
        </div>
    )
}

export default TrackButton
