import React, { Component } from 'react';
import PhotoAndProfilePic from '../Components/PhotoAndProfilePic';
import BookNow from '../Components/BookNow';

class ShowPage extends Component {
	render() {
		return (
			<div>
				<PhotoAndProfilePic />
				<BookNow />
			</div>
		);
	}
}
export default ShowPage;