import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DiscussButton.css';

function DiscussButton() {
    return (
        <div className="discuss-button">
            <FontAwesomeIcon className="discuss-button-icon" icon={faComments} />
            <p className="discuss-button-text">Discuss</p>
        </div>
    )
}

export default DiscussButton;
