import React, { Component } from 'react';
import PhotoAndProfilePic from '../Components/PhotoAndProfilePic';
import BookNow from '../Components/BookNow';
import NavBar from '../Components/NavBar';
import ListingDetails from '../Components/ListingDetails';
import {Container} from 'semantic-ui-react';
class ShowPage extends Component {
	render() {
		return (
			<div>
			<NavBar />
				<Container>
					<PhotoAndProfilePic />
					<hr/>
					<ListingDetails />
				</Container>
			</div>
		);
	}
}
export default ShowPage;