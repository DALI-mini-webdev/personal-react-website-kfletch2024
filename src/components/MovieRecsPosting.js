import React, { Component } from 'react';
import firebase from '../firebase/index';

class MovieRecPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 


    render() {
        return(
            <div>
            <p>{this.props.title}</p>
            <p>{this.props.genre}</p>
        </div>
        )
        
    }
}

export default MovieRecsPosting;