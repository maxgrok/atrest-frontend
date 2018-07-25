import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class BookNow extends Component {
	render() {
		return (
			<div>
				<div>
					Rate: $50
				</div>
				<hr />
				<div>
				 Taxes: 10.0%
				 </div>
				 <hr />
				 <div> 
				 <strong>Total: $55</strong>
				 </div>
				 <hr/>
				<Button primary>Book Now!</Button>
			</div>
		);
	}
}
export default BookNow