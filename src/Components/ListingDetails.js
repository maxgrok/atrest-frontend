import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import BookNow from './BookNow';
import bathroom from './bathroom.png';
import bedroom from './bedroom.png';
import wifi from './wifi.png';
import welive from './welive_room.jpeg';

class ListingDetails extends Component {
	render() {
		return (
			<div>
				<Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
       		Details:
       		<hr />
       		Description:
       		<p>This is great cozy stylish place to stay! 
       		</p>
       		<hr/>
               <img src={bathroom} alt="bathroom" width="100" height="100" />
               <img src={bedroom} alt="bedroom" width="100" height="100" />
               <img src={wifi} alt="wifi" width="100" height="100"/>
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