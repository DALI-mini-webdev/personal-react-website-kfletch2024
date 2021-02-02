import React, { Component } from 'react';
import { Map } from 'immutable'; 

class MovieBoard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: Map() ,
            movieID: 0,
            newMovieName: '',
            newMovieGenre: '',
            newMovieImage: '',

        }
    }
    render () {
        return (
            <div>
                <p> This is the movie board! </p>

                <p> Add a movie! </p>
                <p> Enter Title: </p>
                <imput type="text" value={this.state.newMovieName} 

            </div>
        )
    }
}