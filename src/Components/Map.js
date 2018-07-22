import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Marker } from 'react-mapbox-gl';
import { Grid } from 'semantic-ui-react';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWF4YXRyZXN0IiwiYSI6ImNqaW95MjhjczAyNGIzcWw1NjUxenl2MG8ifQ.jncx0La1jFzX2pWQ5hHjcQ"
});

const MapboxMap = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
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

    <Grid.Row>
      <Grid.Column width={8}>
        Imagee
      </Grid.Column>
      <Grid.Column width={8}>
        image
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
export default MapboxMap;