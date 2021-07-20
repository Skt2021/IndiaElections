import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';

import NavItem from './NavItem';

function Header() {
    const [active, setActive] = useState();
    const list = ["Election Results","Electoral Trends","Manifesto Tracker"]
    const links = ["/election-results","/electoral-trends","/governments"]
    const history = useHistory()
    const onClickHandler = (id) => {
        setActive(id);
        history.push(links[id])
    }

    const ClickHandler = (id) => {
        history.push('/')
    }

    return (
        <div className="header-container">
            <div className="brand-container" onClick={ClickHandler}>
                <img className="brand-image" src="series-logo.png" />
                <h2 className="brand">IndiaElections</h2>
            </div>
            <div className="nav-links-container">
                {
                    list.map((element,i) => {
                        return  <NavItem key={i} id={i} Name={element} active={active} onClickHandler={onClickHandler}/>
                    })
                }
                <div className="signIn-button">
                    <img className="google-logo" src="google.png" />
                    <p className="signIn-text">Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
