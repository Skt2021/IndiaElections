import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRedo, faFilter} from '@fortawesome/free-solid-svg-icons';
import "./ManifestoTracker.css"
import {promises_data} from '../../assets/Data/manifestodata';
import StatusButton from '../../components/ManifestoTracker/Buttons/StatusButton';
import PromisesSummary from '../../components/ManifestoTracker/PromisesSummary/PromisesSummary'
import CategoryButton from '../../components/ManifestoTracker/Buttons/CategoryButton';
import PromisesList from '../../components/ManifestoTracker/PromisesList/PromisesList';


function ManifestoTrackerHome() {
    const [currentCategory, setCurrentCategory] = useState("");
    const [currentStatus, setCurrentStatus] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const filterClickHandler = () => {
        setCurrentCategory("");
        setCurrentStatus("");
        setSearchTerm("");
    }

    return (
                <div className="manifesto-tracker-container"> 
                    <PromisesSummary data={promises_data.statuses}/>
                    <div className="promises-filter-container">
                        <div className="first-row-container">
                            <div className="search-container">
                                <input className="search-input" type="text" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}/>
                                <div className="filter-status-button" onClick={filterClickHandler}>
                                    <FontAwesomeIcon icon={faRedo} />
                                    <p>View All Promises</p>
                                    <FontAwesomeIcon icon={faFilter} />
                                    <p>{promises_data.promises.length}/{promises_data.promises.length}</p>
                                </div>
                            </div>
                            <div className="status-buttons-container">
                            {
                                Object.entries(promises_data.statuses).map((status)=>
                                    <StatusButton id={status} data={status} onClick={setCurrentStatus}/>
                                    )
                            }
                            </div>
                        </div>
                        <div className="category-buttons-container">
                        {
                            Object.entries(promises_data.icons).map((category)=>
                                <CategoryButton data={category} onClick={setCurrentCategory}/>
                            )
                        }
                        </div>
                    </div>
                    <div>
                        <PromisesList data={promises_data} currentCategory={currentCategory} currentStatus={currentStatus} searchTerm={searchTerm}/>
                    </div>
                </div>
           
    )
}

export default ManifestoTrackerHome;
