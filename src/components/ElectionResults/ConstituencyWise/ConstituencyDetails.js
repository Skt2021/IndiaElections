import React,{useEffect,useState} from 'react'
import { Politicalparties} from '../../../assets/Data/data.js';

function ConstituencyDetails(props) {
    const [details,setDetails] = useState([]);
    const [color,setColor] = useState("");
    useEffect(()=>{
        const details =  props.CCDetails.sort(function (a, b) {
            return b["Total Votes"] - a["Total Votes"];
            })
        setDetails(details);
    },[props])


    return(
        <>
            <h4>{props.CC}</h4>
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
                            details.map(candidate => {
                                if(candidate)
                                return (
                                    <tr>
                                    <td style={{textAlign:"left",paddingLeft:"10px"}}>{candidate["Candidate"]}</td>
                                    <td style={{textAlign:"left",paddingLeft:"10px"}}>{candidate["Party"]}</td>
                                    <td style={{textAlign:"right",paddingRight:"10px",}}>{candidate["Total Votes"]}</td>
                                    <td style={{textAlign:"right",paddingRight:"10px",}}>{candidate["% of Votes"]}%</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
            </div>
        </>
    );
}

export default ConstituencyDetails;