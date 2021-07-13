import React from 'react';
import "./ResultTable.css";
import {partywise_2019PGE, Politicalparties} from '../../../assets/Data/data';
function ResultTable(){

  return(
    <div className="result-table-container">
      <table className="result-table">
        <thead>
          <tr>
            <th rowSpan="2" colSpan="2">Party</th>
            <th colSpan="2">Votes</th>
            <th colSpan="3"> Seats</th>
          </tr>
          <tr>
            <th>Popular Votes</th>
            <th>Vote Share</th>
            <th>Contested</th>
            <th>Won</th>
            <th>Seat Change</th>
          </tr>
        </thead>
        <tbody>
          {partywise_2019PGE.map(party => {
            let Icon;
            if(party["Seat Change"]>0){
               Icon =<div style={{display:"flex","justifyContent":"center"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                      </svg>
                      <p>{party["Seat Change"]}</p></div>

            }
            else if(party["Seat Change"]<0){
              Icon = <div style={{display:"flex","justifyContent":"center","alignItems":"center"}}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                     </svg></div>
                     <div><p>{Math.abs(party["Seat Change"])}</p></div></div>
            }
            else{
              Icon = <p><b>-</b></p>
            }
            let currentParty = Politicalparties.filter(el => el.Party === party["PARTY NAME"]);
            return (<tr>
                      <td style={{width:"10px",backgroundColor:`${currentParty[0]["Color"]}`}}></td>
                      <td>{party["PARTY NAME"]}</td>
                      <td>{party["Votes"]}</td>
                      <td>{party["Vote %"]}%</td>
                      <td>{party["CONTESTED"]}</td>
                      <td>{party["WON"]}</td>
                      <td>
                          {Icon}
                      </td>
                    </tr>);
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
