import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import BookNow from './BookNow';

class ListingDetails extends Component {
	render() {
		return (
			<div>
				<Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
               Details about the listing
              </Grid.Column>
              <Grid.Column>
                <BookNow />
              </Grid.Column>
            </Grid.Row>
  </Grid>	
			</div>
		);
	}
}

export default ListingDetails;