import React, { Component, PropTypes } from 'react';

class PhotoAndProfilePic extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<img src="photo" alt="photo" />
            	<img src="photo" alt="profilepic" />
            	<img src="photo" alt="verified icon" />
            	<img src="ratings" alt="rating stars" />
            	<div>(1000 reviews)</div>
            </div>
        );
    }
}

export default PhotoAndProfilePic;
