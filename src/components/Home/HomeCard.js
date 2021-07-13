import React from 'react';

import "./HomeCard.css";
import Button from "./Button";
import { useHistory } from 'react-router';

function HomeCard(props) {

    if(props.right){
        var dir = "row-reverse";
        var imgStyle = {"margin":"0","marginRight":"30px"}
        var cardStyle = {"marginLeft":"0px","flexDirection":"row-reverse"}
    }
    const history = useHistory();

    const ClickHandler = () => {
        console.log(props.id);
        history.push("/"+props.id);
    }

    return (
        <div className="home-card-container" style={cardStyle}>
            <div className="home-card-text-container">
                <hr className="home-card-line"/>
                <p className="home-cards-category">{props.category.toUpperCase()}</p>
                <h4 className="home-cards-title">{props.title}</h4>
                <p className="home-cards-body">{props.body}</p>
                <Button Name={props.category} onClick={ClickHandler}/>
            </div>
            <div className="home-card-image-container">
                <img className="home-card-image"  style={imgStyle} src={props.image} />
            </div>
        </div>
    )
}

export default HomeCard;
