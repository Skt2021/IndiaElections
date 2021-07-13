import React from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./PromisesList.css"
import DiscussButton from '../Buttons/DiscussButton';

function PromisesList(props) {
    var history = useHistory()
    var x = 0;
    const onClickHandler = (id) =>{
        console.log(id)
        history.push("/governments/central-government/"+id)
    }
    
    return (
        <div className="promises-list-container">
            <div className="promises-table">
                <div className="promises-table-header">
                    <p className="status-title"><b>Status</b></p>
                    <p className="category-title"><b>Category</b></p>
                    <p className="promise-title"><b>Promise</b></p>
                </div>
                {
                    Object.entries(props.data.promises).map((promise,index)=>{
                        if((!props.currentStatus || promise[1].status === props.currentStatus) && (!props.currentCategory || promise[1].category === props.currentCategory) && (promise[1].title.toLowerCase().includes(props.searchTerm.toLowerCase()))){
                        return <div className="promises-table-body" style={{"backgroundColor":`${props.data.statuses[`${promise[1]["status"]}`]["color"]}`}} onClick={()=>onClickHandler(index+1)}>
                            <p className="index-body">{index+1}</p>
                            <FontAwesomeIcon className="status-body" icon={props.data.statuses[`${promise[1]["status"]}`]["icon"]} />
                            <div className="category-body">
                                <FontAwesomeIcon icon={props.data.icons[`${promise[1]["category"]}`]} />
                                <p >{promise[1].category}</p>
                            </div>
                            <div className="promise-body-container">
                             <p className="promise-body"><b>{promise[1].title}</b></p>
                            </div>
                            <DiscussButton />
                         </div>}
                    })
                }
                
            </div>
        </div>
    )
}

export default PromisesList
