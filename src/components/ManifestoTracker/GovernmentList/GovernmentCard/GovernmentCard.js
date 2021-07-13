import React from 'react';
import TrackButton from '../../Buttons/TrackButton';
import './GovernmentCard.css';

function GovernmentCard(props) {

    const onClickHandler = () => {
        props.ClickHandler(!props.value)
    }

    return (
        <div className="government-card-container">
            <img className="card-image" src="series-logo.png" />
            <div className="text-container">
                <h4 className="header-text">BJP Sarkaar - Government of India</h4>
                <p className="body-text">On 16th May 2014, Bhartiya Janta Party (BJP) won the electoral vote, winning 282/543 seats, and Narendra Modi took oath as 14th Prime Minister of India on 26th May 2014.</p>
            </div>
            <TrackButton clickHandler={onClickHandler}/>
        </div>
    )
}

export default GovernmentCard
