import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ListingsContainer from './Components/ListingsContainer';
import MapBoxMap from './Components/Map';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecondPage from './Pages/SecondPage';
import ShowPage from './Pages/ShowPage';
import Home from './Pages/Home';

class App extends React.Component {
  render() {
    return (
    	<div>
	      	<Home />

	    </div>
    );
  }
}

export default App;