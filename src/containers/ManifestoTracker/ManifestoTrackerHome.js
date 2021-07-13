import React,{useState} from 'react'
import "./ManifestoTracker.css"
import GovernmentList from '../../components/ManifestoTracker/GovernmentList/GovernmentList'
import ManifestoTracker from './ManifestoTracker';

function ManifestoTrackerHome() {

    const [showTracker, setShowTracker] = useState(true);

    return (
        <>
            {
                (showTracker) ?  (
                    <div>
                        <h1>Manifesto Tracker</h1>
                        <GovernmentList ClickHandler={setShowTracker} value={showTracker}/>
                    </div>
                ):( 
                    <ManifestoTracker />
                )
            }
            
        </>
    )
}

export default ManifestoTrackerHome;
