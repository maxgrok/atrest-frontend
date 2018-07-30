import React from 'react';
import './listing.css';

class Listing extends React.Component {

	render() {
		return (
			<div>
				<ul id="listing">
					<a class="link" href="/show">
					<li>{this.props.listing.attributes.name}</li>
					<li>{this.props.listing.attributes.address}</li>
					<li>{this.props.listing.attributes.rate}</li>
					</a>
					<hr/>
				</ul>
			</div>
		);
	}
}

export default Listing;