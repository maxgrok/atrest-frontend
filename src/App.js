import React from 'react';
import './App.css';
import ListingsContainer from './Components/ListingsContainer';
import MapBoxMap from './Components/Map';
import NavBar from './Components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ListingsContainer />
        <MapBoxMap />
      </div>
    );
  }
}

export default App;
