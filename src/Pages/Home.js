import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBox from '../Components/Search';

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<SearchBox />
			</div>
		);
	}
}

export default Home;