import React from 'react';
import "./ResultCategoryButton.css";

function ResultCategoryButton(props) {

    const onClickHandler = () => {
        props.ClickHandler(props.id);
    }

    return (
        <div className={(props.current==props.id) ? "result-category-button-container result-category-button-selected" : "result-category-button-container"} onClick={onClickHandler}>
            <p className="result-category-button-text"><b>{props.Name}</b></p>
        </div>
    )
}

export default ResultCategoryButton
