import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import "./ManifestoTracker.css";

import {promises_data} from "../../assets/Data/manifestodata";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PromiseDetails() {
    const [promise, setPromise] = useState([{     
        "id":1,
        "title":"A very good title",
        "description":"",
        "status":"Fulfilled",
        "status_info":"",
        "category":"Business and Industries",
        "comments":[]
    }]);
    let params = useParams();
    useEffect(() => {
        const arr = promises_data.promises.filter((promise)=>{
            return promise.id == params.id;
        })
        setPromise(arr);
    },[])


    return (
        <div className="promise-details-container">
            <div className="promise-details-category-container">
                <FontAwesomeIcon icon={promises_data.icons[`${promise[0].category}`]} className="promise-details-category-icon"/>
                <div>
                <p className="promise-details-category-text">{promise[0].category}</p>
                <p className="promise-details-title-text">{promise[0].title}</p>
                </div> 
            </div>
            <div className="promise-details-status-container" style={{"backgroundColor": `${promises_data.statuses[`${promise[0]["status"]}`]["color"]}`}}>
                <FontAwesomeIcon icon={promises_data.statuses[`${promise[0]["status"]}`]["icon"]} className="promise-details-status-icon" />
                <p className="promise-details-status-text">{promise[0].status}</p>
            </div>
            <div className="promise-details-details-container">
                <p className="promise-details-details-text">{promise[0].description}</p>
                <p className="promise-details-details-text">{promise[0].status_info}</p>
            </div>
            <div className="promise-details-comments-container">
                <p className="promise-details-comments-text">Comments</p>
                <hr style={{"marginLeft":"150px","marginTop":"50px"}}></hr>
                <textarea className="promise-details-comments-box" placeholder="Add a comment..."/>
                <button >Submit</button>
            </div>
        </div>
    )
}

export default PromiseDetails
