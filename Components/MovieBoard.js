import React, { Component } from 'react';
import { Map } from 'immutable'; 

class MovieBoard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: Map() ,
            movieID: 0,

        }
    }
    render () {
        return (
            <div>
                <p> This is the movie board! </p>
            </div>
        )
    }
}