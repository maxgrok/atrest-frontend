import React, { Component } from 'react';
import ListingsContainer from './ListingsContainer';
import MapboxMap from './Map';

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