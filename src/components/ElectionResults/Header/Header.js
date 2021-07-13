import React from 'react';
import "./Header.css";
function Header(){
  return(
    <div className="container">
      <img className="image" src="series-logo.png" />
      <h2><b>GENERAL ELECTION RESULTS 2019</b></h2>
      <div className="stacked-bar-wrapper">
        <table style={{width: "900px",height:"30px"}}>
          <tr>
            <td style={{background: "#FFA500",width:"64%"}}>348</td>
            <td style={{background: "#CCCCCC",width:"20%"}}>107</td>
            <td style={{background: "#5BADD6",width:"16%"}}>87</td>
          </tr>
          <tr>
            <td className="nda">NDA</td>
            <td className="oth">OTHERS</td>
            <td className="upa">UPA</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Header;
