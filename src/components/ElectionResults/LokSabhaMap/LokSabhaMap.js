
import { ls_map_data, state_map_data } from "../../../assets/Data/LokSabha_MapData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tooltip from "./Tooltip";
import { Politicalparties } from "../../../assets/Data/data";
import { Abbre } from "../../../assets/Data/LSMapAbbreveations";

const LokSabhaMap = ({resultData,loading}) => {

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
                const data = resultData[Abbre[state[0]]]
                return state[1].map((cons) => {
                  if(Abbre[state[0]] in resultData){
                    if(Object.keys(cons)[0].toUpperCase() in data){
                      var results = data[Object.keys(cons)[0].toUpperCase()][Object.keys(cons)[0].toUpperCase()][0]
                      const winningParty = results["Party"]
                      const winningPartyDetails = Politicalparties.filter(element=>{
                        return element.Abbreviation === winningParty
                      })
                      if(winningPartyDetails[0]){
                        var color = winningPartyDetails[0]["Color"]
                      }
                      else{
                        console.log(winningParty)
                      }
                    }
                    else{
                        //console.log(Object.keys(cons)[0].toUpperCase())
                        color = "white";
                    }
                  }
                  else{
                      console.log(Abbre[state[0]])
                      color = "white";
                  }


                  return (
                    <Tippy key={Object.keys(cons)[0]} content={<Tooltip id={Object.entries(cons)[0][0]} data={results} />} >
                    <path
                      key={Object.keys(cons)[0]}
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
                      key={Object.entries(state)[0]}
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
