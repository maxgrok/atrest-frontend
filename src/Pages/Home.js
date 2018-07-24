import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Search from '../Components/Search';

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Search />
			</div>
		);
	}
}
export default Home;