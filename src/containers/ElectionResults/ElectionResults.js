import React from 'react';
import {useHistory} from 'react-router-dom';
import TrackYourConstituency from '../../components/ElectionResults/TrackYourConstituency/TrackYourConstituency';
import "./ElectionResults.css";
import {states,years} from "../../assets/Data/data-1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import StateWiseMap from '../../components/ElectionResults/Map/StateWiseMap';

export default function ElectionResults() {

    var history = useHistory();

    const onClickHandler = (index) => {
        history.push("/election-results/general-elections/"+years[index])
    }

    return (
        <div className="election-results-container">
            <div className="live-news-container">
                <p className="live-news-text">Live News</p>
            </div>
            <div className="election-results-body-container">
                <div className="election-results-left-panel">
                    <div>
                        <TrackYourConstituency states={states}/>
                    </div>
                    <div className="election-results-all-general-elections">
                        <div className="election-results-all-general-header">
                            <p>General Elections Results</p>
                        </div>
                        {
                            years.map((year,index)=>{
                                return <div className="election-results-all-general-elections-button-container">
                                            <button className="election-results-all-general-elections-button" onClick={()=>onClickHandler(index)}>
                                                <b>{year}</b>
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </button>
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="election-results-right-panel">
                    <StateWiseMap />
                </div>
            </div>
        </div>
    )
}
