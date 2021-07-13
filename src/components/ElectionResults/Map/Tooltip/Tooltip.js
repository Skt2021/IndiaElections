import React from 'react'

function Tooltip(props) {
    return (
        <div class="body">
        <div class="right">
            <div class="text-content">
              <div style={{display:"flex"}}>
                <div>
                  <h3>Uttar Pradesh</h3>
                  <h4>2017 Assembly Election Results</h4>
                  <h4>Chief Minister: Yogi Adityanath</h4>
                </div>
                <img src="yogi-adityanath-36200.jpg"/>
              </div>
                <table style={{width:"100%",height:"7px",marginBottom:"5px",}}>
                  <td style={{bgcolor:"#FF9933",width:"77.4%"}}></td>
                  <td style={{bgcolor:"#FF0000",width:"11.6%"}}></td>
                  <td style={{bgcolor:"#22409A",width:"4.6%"}}></td>
                  <td style={{bgcolor:"grey"}}></td>
                </table>
                <table class="table">
                  <tr>
                    <th rowspan="2" colspan="2">Party</th>
                    <th colspan="2">Popular vote</th>
                    <th colspan="3">Seats</th>
                  </tr>
                  <tr>
                    <th >Vote %</th>
                    <th >+/-</th>
                    <th >Won</th>
                    <th >+/-</th>
                  </tr>
                  <tr>
                    <td style={{bgcolor:"#FF9933"}} class="color-bar"></td>
                    <td style={{bgcolor:"#FF9933"}}>Bhartiya Janata Party (BJP)</td>
                    <td>39.7%</td>
                    <td>+24.7%</td>
                    <td>312</td>
                    <td>+265</td>
                  </tr>
                  <tr>
                    <td style={{bgcolor:"#FF0000"}} class="color-bar"></td>
                    <td>Samajwadi Party (SP)</td>
                    <td>22%</td>
                    <td>-7.7%</td>
                    <td>47</td>
                    <td>-177</td>
                  </tr>
                  <tr>
                    <td style={{bgcolor:"#22409A"}} class="color-bar"></td>
                    <td>Bahujan Samaj Party (BSP)</td>
                    <td>22.2%</td>
                    <td>-3.7%</td>
                    <td>19</td>
                    <td>-61</td>
                  </tr>
               </table>
            </div>
        </div>
        {props.children}
    </div>
    )
}

export default Tooltip
