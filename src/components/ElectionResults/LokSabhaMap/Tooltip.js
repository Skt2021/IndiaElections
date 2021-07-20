import { useState, useEffect } from "react";

const Tooltip = (props) =>{

  if(props.data){
    var tooltipContent = <>
      <h2>{props.data.Constituency_Name}</h2>
      <h3>{props.data["Candidate"]}</h3>
      <h3>{props.data["Party"]}</h3>
    </>
  }
  else{
    tooltipContent = <>
      <h2>{props.id}</h2>
    </>
  }

  return (
    <div>
      {tooltipContent}
    </div>
  );
};

export default Tooltip;