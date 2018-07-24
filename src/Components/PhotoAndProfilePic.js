import React, { Component, PropTypes } from 'react';
import { Grid, Image } from 'semantic-ui-react'

class PhotoAndProfilePic extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Image src='./room.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='./profilePic.jpeg' />
                <img src="photo" alt="profilepic" />
                                    <img src="photo" alt="verified icon" />
                                    <img src="ratings" alt="rating stars" />
                                    <div>(1000 reviews)</div>
              </Grid.Column>
            </Grid.Row>
  </Grid>
        );
    }
}

export default PhotoAndProfilePic;