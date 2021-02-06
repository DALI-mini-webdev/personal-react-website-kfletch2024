import React, { Component } from 'react';
import { Map } from 'immutable';
import MoviePosting from './MoviePosting';


class MovieBoard extends Component {
    construcor(props) {
        super(props);
        this.state = {
            movies: Map(),
            movieId:  0,
            newMovieTitle: '',
            newMovieGenre: '',
            newMovieImage: '',
        }
    }


    newMovieTitleFunction = (event) => {
        this.setState({
            newMovieTitle: event.target.value });
    }

    newMovieGenreFunction = (event) => {
        this.setState({
            newMovieGenre: event.target.value });
    }

    newMovieImageFunction = (event) => {
        this.setState({
            newMovieImage: event.target.value });
    }

    saveMovieInfo = () => {
        let movieData = {
            title: this.state.newMovieTitle,
            genre: this.state.newMovieGenre,
            image: this.state.newMovieImage,
        }
        this.setState ( {
            movies: this.state.movies.set(this.state.movieID, dogData),
            movieID: this.state.movieID + 1
        });

    }

    render () {
        const allMovies = this.state.movies.entrySeq().map(
            ([id, dog]) => {
                return (
                    <MoviePosting 
                    name={movie.name}
                    genre={movie.genre}
                    movieURL={movie.image}
                    key={id}
                    
                    />
                );
            }
        );

        return (
            <div>
                <p> This is the Movie Board! </p>
                {allMovies}

                <p> Add a movie! </p>

                <p> Enter Title: </p>
                <input type="text" value={this.state.newMovieTitle} onChange={this.newMovieTitleFunction} />

                <p> Enter Genre: </p>
                <input type="text" value={this.state.newMovieGenre} onChange={this.newMovieGenreFunction} />

                <p> Enter Image URL: </p>
                <input type="text" value={this.state.newMovieImage} onChange={this.newMovieImageFunction} />

                <button onClick={this.saveMovieInfo}>Save!</button>

            </div>
        )
    }
}

export default MovieBoard;