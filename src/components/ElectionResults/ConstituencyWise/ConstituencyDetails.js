import React,{useEffect,useState} from 'react'
import { Politicalparties} from '../../../assets/Data/data.js';

function ConstituencyDetails({CC,CCDetails}) {

    return(
        <>
            <h4>{CC}</h4>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <table style={{width:"800px"}}>
                    <thead>
                        <th>Name</th>
                        <th>Party</th>
                        <th>Votes</th>
                        <th>Vote Share</th>
                    </thead>
                    <tbody>
                        {   
                            (CCDetails[CC.toUpperCase()]) ? 
                            CCDetails[CC.toUpperCase()].map(candidate => {
                                if(candidate)
                                    return (
                                        <tr>
                                        <td style={{textAlign:"left",paddingLeft:"10px"}}>{candidate["Candidate"]}</td>
                                        <td style={{textAlign:"left",paddingLeft:"10px"}}>{candidate["Party"]}</td>
                                        <td style={{textAlign:"right",paddingRight:"10px",}}>{candidate["Votes"]}</td>
                                        <td style={{textAlign:"right",paddingRight:"10px",}}>{candidate["Vote_Share_Percentage"]}%</td>
                                        </tr>
                                    )
                            }):" "
                        }
                    </tbody>
            </table>
            </div>
        </>
    );
}

export default ConstituencyDetails;