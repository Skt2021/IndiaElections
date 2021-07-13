import React from 'react';
import HomeCard from '../../components/Home/HomeCard';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-main-page">
                <div className="text-container-main">
                 <h1 >One stop solution to get all elections related information, Political and Electoral trends and status of promises made by different governments in India.</h1>
                </div>
            </div>
            <div className="home-cards-container">
                <HomeCard  
                        id="election-results"
                        category="Election Results" 
                        title="Provides all election related information to voters and political operatives."
                        body="Analysing results of previous election cycles enables voters to make better sense of governments policies and political atmosphere of the country."
                        image="17th_Lok_sabha_2021.svg.png" />
                <HomeCard right={true} 
                        id="electoral-trends"
                        category="Elctoral Trends" 
                        title="Analyse electoral trends with deep analysis and visual context"
                        body="Analysing electoral trends provides us with very useful insights about changing socio-economic dynamics in Indian society and its impact on different policies."
                        image="electoral-trends.jpg" />
                <HomeCard 
                        id="governments" 
                        category="Manifesto Tracker" 
                        title="Enable voters to monitor governments progress on different promises made to the electorate"
                        body="We provide information regarding different promises made in the manifesto of different political parties and actions taken on them by different governments."
                        image="promisestracker.png" />
            </div>
        </div>
    )
}

export default Home;
