import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import firebase from '../../firebase';

import {states} from "../../assets/Data/data-1";

import ResultCategoryButton from '../../components/ElectionResults/Buttons/ResultCategoryButton';
import ResultTable from '../../components/ElectionResults/ResultTable/ResultTable';
import Header from '../../components/ElectionResults/Header/Header';
import "./GeneralElectionResults.css";
import Constituency from '../../components/ElectionResults/ConstituencyWise/Constituency';
import LokSabhaMap from '../../components/ElectionResults/LokSabhaMap/LokSabhaMap';

function GeneralElectionResults() {
    const [current,setCurrent] = useState(0);
    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const categories = ["PartyWise Results","ConstituencyWise Results","ConstituencyWise Map"]
    
    let {year} = useParams();
    console.log(year)

    async function fetchData (state,obj){
        const db = firebase.firestore();
        const stateName = state.split(" ").join("_")
        const dataRef = await db.collection("LokSabha_Election_Results").doc(`${year}`).collection(`${stateName}`)
        dataRef.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                obj[state][Object.keys(doc.data())] = doc.data()
            })
        },
        (error)=>{
            console.log(error)
        })
        return dataRef.get()
    }

    useEffect(() => {
        const obj = {}
        const promiseList = states.map((state)=>{
            obj[state]={}
            return fetchData(state,obj)
        })
        setData(obj)
        Promise.all(promiseList).then((res)=>{
            setLoading(prevState=>!prevState)
            console.log("changed")
            console.log(data)
        })
    }, [])


    return (
        <div className="general-election-results-container">
            <Header />
            <div className="category-buttons-container">
                {categories.map((category,index)=>{
                  return  <ResultCategoryButton Name={category} key={index} id={index} current={current} ClickHandler={setCurrent}/>
                })}
            </div>
            {
                (current === 0) ? <div className="general-election-results-body-container">
                    <ResultTable />
                    </div>:" "
            }
            {
                (current === 1) ? <div>
                        <Constituency resultData={data} loading={loading}/>
                    </div>:" "
            }
            {
                
                    (current === 2) ? 
                            <LokSabhaMap resultData={data} loading={loading}/>
                        :" "
                
            }
        </div>
    )
}

export default GeneralElectionResults
