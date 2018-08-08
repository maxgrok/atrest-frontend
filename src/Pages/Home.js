import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBox from '../Components/Search';
import {Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Home extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();
    }

	render() {
		return (
			<div>
				<NavBar />
				<div style={{margin: "0 auto", width: "15%", paddingTop:"15%"}}>
					<form onSubmit={this.handleSubmit} >
					<input />
					<Link to ="/search" ><button type="submit">Search</button></Link>
					</form>
				</div>
			</div>
		);
	}
}

export default Home;