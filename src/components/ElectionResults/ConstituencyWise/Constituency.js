import React,{useState,useEffect} from 'react';
import ConstituencyDetails from './ConstituencyDetails';

function Constituency({resultData,loading}){
const [currentConstituency,setCurrentConstituency] = useState("ANDAMAN & NICOBAR ISLANDS");
const [currentConstituencyDetails,setCurrentConstituencyDetails] = useState([]);

useEffect(()=>{
    if (!loading){
    let Data = [];
    var stateName;
    Object.keys(resultData).map(state => {
        Data = Object.keys(resultData[state]).filter(constituency=>{
            return constituency === currentConstituency.toUpperCase()
        })
        if(Data.length===1){
            stateName = state
        }

 })
 setCurrentConstituencyDetails(resultData[stateName][currentConstituency.toUpperCase()]);}
},[currentConstituency,loading]);

const handleChange = (e) => {
    setCurrentConstituency(e.target.value);
}

    return(
        <div >
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginTop:"40px"}}>
                <form onChange={handleChange}>
                    <label>Search your Constituency</label>
                    <select>
                        {   
                            Object.keys(resultData).map(state => {
                                return Object.keys(resultData[state]).map(constituency=>{
                                    return <option>{constituency}</option>
                                })
                         })
                        }
                    </select>
                </form>
            </div>
            <div>
            {
                loading ? "":<ConstituencyDetails CC={currentConstituency} CCDetails={currentConstituencyDetails}/>
            }
            </div>
        </div>
    );
}

export default Constituency;