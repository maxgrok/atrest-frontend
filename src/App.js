import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ListingsContainer from './Components/ListingsContainer';
import MapBoxMap from './Components/Map';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SecondPage from './Pages/SecondPage';
import ShowPage from './Pages/ShowPage';
import Home from './Pages/Home';

class App extends React.Component {
  render() {
    return (
    <div>
      <Router>
      	<React.Fragment>
      		<NavBar />
      		<Route exact path="/" component={Home} />
      		<Route exact path="/search" component={SecondPage} />
      		<Route exact path="/show" component={ShowPage} />
      	</React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;