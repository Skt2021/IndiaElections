import React,{useState} from 'react';
import ResultCategoryButton from '../../components/ElectionResults/Buttons/ResultCategoryButton';
import ResultTable from '../../components/ElectionResults/ResultTable/ResultTable';
import PieChart from '../../components/ElectionResults/Charts/Piecharts';
import Header from '../../components/ElectionResults/Header/Header';
import "./GeneralElectionResults.css";
import Constituency from '../../components/ElectionResults/ConstituencyWise/Constituency';
import LokSabhaMap from '../../components/ElectionResults/LokSabhaMap/LokSabhaMap';

function GeneralElectionResults() {
    const [current,setCurrent] = useState(0);

    const categories = ["PartyWise Results","ConstituencyWise Results","Data Visualization"]
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
                    <PieChart />
                    </div>:" "
            }
            {
                (current === 1) ? <div>
                        <Constituency />
                    </div>:" "
            }
            {
                
                    (current === 2) ? 
                            <LokSabhaMap />
                        :" "
                
            }
        </div>
    )
}

export default GeneralElectionResults
