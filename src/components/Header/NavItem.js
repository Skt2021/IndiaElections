import React from 'react';
import './NavItem.css';

function NavItem(props) {
    const clickHandler = () => {
        props.onClickHandler(props.id);
    }

    return (
        <div className={props.active===props.id ? "NavItem active":"NavItem"} onClick={clickHandler}>
            <p><b>{props.Name}</b></p>
        </div>
    )
}

export default NavItem
