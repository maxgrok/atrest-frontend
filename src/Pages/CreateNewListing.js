import React, { Component } from 'react';
import FormExampleForm from '../Components/Form';
import NavBar from '../Components/NavBar';
import {Container} from 'semantic-ui-react';

class CreateNewListing extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Container>
				<FormExampleForm />
				</Container>
			</div>
		);
	}
}
export default CreateNewListing;