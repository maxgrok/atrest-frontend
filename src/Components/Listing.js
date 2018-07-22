import React from 'react';

class Listing extends React.Component {

	render() {
		return (
			<div>
				<ul>
					<li>{this.props.listing.attributes.name}</li>
					<li>{this.props.listing.attributes.address}</li>
				</ul>
			</div>
		);
	}
}

export default Listing;