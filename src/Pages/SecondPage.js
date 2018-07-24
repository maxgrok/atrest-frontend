import React, { Component } from 'react';
import ListingsContainer from '../Components/ListingsContainer';
import MapboxMap from '../Components/Map';

class SecondPage extends Component {
	render() {
		return (
			<div>
				<ListingsContainer />
				<MapboxMap />
			</div>
		);
	}
}

export default SecondPage;