import React,{useState,useEffect} from 'react';
import ConstituencyDetails from './ConstituencyDetails';
import {ConstituencyData,ConstituencyList} from '../../../assets/Data/constituencyData';

function Constituency(){
const [currentConstituency,setCurrentConstituency] = useState("ARUNACHAL EAST");
const [currentConstituencyDetails,setCurrentConstituencyDetails] = useState([]);

useEffect(()=>{
    let Data = [];
    Object.keys(ConstituencyData).map(function(key,index){
        ConstituencyData[key].map( element => {
             if(element["Constituency"] === currentConstituency){
                 Data.push(element);
             }
     })
 })
 setCurrentConstituencyDetails(Data);
},[currentConstituency]);

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
                            ConstituencyList.map(constituency => {
                                return <option>{constituency}</option>
                            })
                        }
                    </select>
                </form>
            </div>
            <div>
                 
                <ConstituencyDetails CC={currentConstituency} CCDetails={currentConstituencyDetails}/>
            </div>
        </div>
    );
}

export default Constituency;