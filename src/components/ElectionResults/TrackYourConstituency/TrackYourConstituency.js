import React,{useState} from 'react';
import "./TrackYourConstituency.css";

function TrackYourConstituency(props) {

    return (
        <div className="track-your-constituency-container">
            <div className="track-your-constituency-header">
                <p>Track Your Constituency</p>
            </div>
            <div className="track-your-constituency-body">
                <select className="track-your-constituency-option">
                    <option>Select Type</option>
                    <option>Parliamentary Constituency</option>
                    <option>Assembly Constituency</option>
                </select>
                <form className="track-your-constituency-option" >
                <select className="track-your-constituency-option">
                    <option>Select State</option>
                    {   
                        props.states.map((state)=>{
                            return <option>{state}</option>
                        })
                    }
                </select>
                </form>
                <select className="track-your-constituency-option" >
                </select>
                <button>Search</button>
            </div>
        </div>
    )
}

export default TrackYourConstituency
