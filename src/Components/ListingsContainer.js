import React, { Component } from 'react';
import Listing from './Listing';
import SearchExampleStandard from './Search';

const url = "http://localhost:3000/api/v1/listings"

class ListingsContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			listings:[],
			searchTerm:""
		}
	}

	componentDidMount(){
		this.fetchListings();
	}

	fetchListings = () =>{
		fetch(url)
		.then(res => res.json())
		.then(json => this.setState({listings: json.data}))
	}

	render() {
		return (
			<div>
				{this.state.listings.map(listing =>{
					return <Listing key={listing.id} listing={listing} />
				})
				}
			</div>
		);
	}
}

export default ListingsContainer;