import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import ManifestoTrackerHome from './containers/ManifestoTracker/ManifestoTrackerHome';
import PromiseDetails from './containers/ManifestoTracker/PromiseDetails';
import Footer from './components/Footer/Footer';
import ElectionResults from './containers/ElectionResults/ElectionResults';
import GeneralElectionResults from './containers/ElectionResults/GeneralElectionResults';
import ResultTable from './components/ElectionResults/ResultTable/ResultTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/election-results" exact component={ElectionResults} />
        <Route path="/election-results/general-elections/:year" exact component={GeneralElectionResults} />
        <Route path="/election-results/general-elections/:year/partywise-results" exact component={ResultTable} />
        <Route path="/electoral-trends" exact component={()=><p>Electoral Trends</p>} />
        <Route path="/governments" exact component={ManifestoTrackerHome} />
        <Route path="/governments/central-government/:id" exact component={PromiseDetails} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
