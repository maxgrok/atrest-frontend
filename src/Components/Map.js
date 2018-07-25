import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Marker } from 'react-mapbox-gl';
import { Grid } from 'semantic-ui-react';
import './map.css';
import ListingsContainer from './ListingsContainer';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWF4YXRyZXN0IiwiYSI6ImNqaW95MjhjczAyNGIzcWw1NjUxenl2MG8ifQ.jncx0La1jFzX2pWQ5hHjcQ"
});

class MapboxMap extends React.Component {

 render(){
  return(
    <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
    <ListingsContainer />
      </Grid.Column>
      <Grid.Column>       
          <Map 
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "50vw"
        }} 
        center={[-77.0363700, 38.8951100]}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-77.0363700, 38.8951100]}/>
          </Layer>
        </Map>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    );
 }
}
export default MapboxMap;

