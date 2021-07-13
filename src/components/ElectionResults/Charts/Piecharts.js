import React,{useEffect} from 'react';
import Chart from 'chart.js';
import {partywise_2019PGE, Politicalparties} from '../../../assets/Data/data';
import "./PieChart.css";

function PieChart(){
    var labelData = [];
    var Seatdata = [];
    var Votes = [];
    var color = [];
    useEffect(()=>{
        partywise_2019PGE.map(party => {
            labelData.push(party["PARTY NAME"]);
            Seatdata.push(party["WON"]);
            Votes.push(party["Vote %"]);
            Politicalparties.map(element => {
                if(element["Party"] === party["PARTY NAME"]){
                    color.push(element["Color"]);
                }
            })
        })
    })

    useEffect(()=>{
        console.log(color);
        const ctx1 = document.getElementById("seatChart");
        new Chart(ctx1, {
            type: "pie",
            data : {
                labels: labelData,
                datasets: [
                    {
                        data: Seatdata,
                        backgroundColor : color,
                        hoverBackgroundColor : [
                            "Orange",
                            "blue",
                            "grey"
                        ],
                        borderWidth : 1
                    }
                ]
            },
            options : {
                legend : {
                    display: false,
                }
            }
        })
    },[])

    useEffect(()=>{
        const ctx2 = document.getElementById("voteChart");
        new Chart(ctx2, {
            type: "pie",
            data : {
                labels: labelData,
                datasets: [
                    {
                        data: Votes,
                        backgroundColor : color,
                        hoverBackgroundColor : [
                            "Orange",
                            "blue",
                            "grey"
                        ],
                        borderWidth : 1
                    }
                ]
            },
            options : {
                legend : {
                    display: true,
                }
            }
        })
    },[])

    return(
        <div className="chart-container">
            <canvas id="seatChart" width="300px" height="300px" style={{"marginLeft":"30px"}} />

            <canvas id="voteChart" width="0px" height="500px" style={{"marginTop":"30px","marginLeft":"30px",}}/>
        </div>
    );
}

export default PieChart;