import React, { Component, PropTypes } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import welive from './welive_room.jpeg';
import max from './photo.jpg';
import verified from './verified.svg';
import star from './star.svg'
class PhotoAndProfilePic extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Image src={welive} />
              </Grid.Column>
              <Grid.Column>
              <img src={verified} style={{float: "right"}} alt="verified icon" width="50" height="50" />
                <Image src={max} style={{borderRadius: "50%", float:"right"}} width="250" height="250"/>
                <br /><br /><br /><br/><br/><br/><br/><br/><br/><br/><br/>
                <Image src={star} style={{float:"right", marginRight:"-200px", marginBottom:"-100px"}} alt="rating stars" width="150" height="150"/>
                <br /><br /><br /><br />
                <a href="#" style={{float:"right"}}>(1000 reviews)</a>
              </Grid.Column>

            </Grid.Row>
        </Grid>
        );
    }
}

export default PhotoAndProfilePic;