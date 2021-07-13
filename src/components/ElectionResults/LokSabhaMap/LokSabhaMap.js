
import { ls_map_data, state_map_data } from "../../../assets/Data/LokSabha_MapData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tooltip from "./Tooltip";
import { ConstituencyData,ConstituencyList } from "../../../assets/Data/constituencyData";
import { Politicalparties } from "../../../assets/Data/data";
import { Abbre } from "../../../assets/Data/LSMapAbbreveations";

const LokSabhaMap = () => {
  return (
    <>
      <svg _ngcontent-c6="" id="map-container" height="1051px" width="740px" viewBox="0 0 650 650">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="null"
          preserveAspectRatio="xMinYMin meet"
          class="map-svg svg-content"
        >
          <g class="pc-group">
            <g class="map-g">
              {Object.entries(ls_map_data).map((state) => {
                if(state[0]==="U04"){
                  return 0
                }
                const array = ConstituencyData[Abbre[state[0]]]
                return state[1].map((cons) => {
                  const result = array.filter((ele)=>{
                    
                    return ele.Constituency.toLowerCase() === Object.keys(cons)[0].toLowerCase()
                  })
                  const details =  result.sort(function (a, b) {
                    return b["Total Votes"] - a["Total Votes"];
                    })
                  if(typeof(details[0]) === "object"){
                    var winner = Politicalparties.filter((party)=>{
                      return details[0].Party === party.Party
                    })
                  }
                  if(typeof(winner)==="object" && winner.length>0){
                    console.log(winner)
                    var color = winner[0].Color;
                  }
                  else{
                    color = "white"
                  }
                  return (
                    <Tippy content={<Tooltip id={Object.entries(cons)[0][0]} />} >
                    <path
                      className="S02-1"
                      d={Object.entries(cons)[0][1]}
                      stroke="black"
                      strokeWidth="0.5"
                      id="AW"
                      fill={color}
                    ></path>
                    </Tippy>
                  );
                });
              })}
            </g>
            <g>
              {
                  state_map_data.map((state)=>{
                      return <path
                      className="S02-1"
                      d={Object.entries(state)[0][1]}
                      stroke="black"
                      strokeWidth="0.5"
                      id="AW"
                      fill="none"
                    ></path>
                  })
              }
            </g>
          </g>
        </svg>
      </svg>
    </>
  );
};

export default LokSabhaMap;
