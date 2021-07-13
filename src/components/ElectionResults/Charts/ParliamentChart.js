import React from 'react';
import Chart from '@reuters-graphics/parliament-chart';
import {partywise_2019PGE, Politicalparties} from '../../data.js';

function ParliamentChart() {
   
    return(
        <Chart props={["gop","dem"],["#dd1d32","#3181c6"]}/>
    );
}

export default ParliamentChart;