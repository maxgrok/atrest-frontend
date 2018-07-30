import React, { Component } from 'react';
import ListingsContainer from '../Components/ListingsContainer';
import MapboxMap from '../Components/Map';
import NavBar from '../Components/NavBar';

class SecondPage extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<MapboxMap />
			</div>
		);
	}
}

export default SecondPage;