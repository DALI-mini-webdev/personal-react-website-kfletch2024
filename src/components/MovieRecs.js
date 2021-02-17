import React, { Component } from 'react';
import firebase from '../firebase/index';
import MovieRecsPosting from './MovieRecsPosting';

class MovieRecs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMovieRecs: [],
            title: '',
            genre: '',
            id: 0,

        }
    }

    newTitleFuction = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    newGenreFunction = (event) => {
        this.setState({
            genre: event.target.value
        })
    }

    saveNewMovieRec = () => {
        firebase.db.collection('movierec').add({
            title: this.state.title,
            genre: this.state.genre,
            id: this.state.id,
        }).then(ref => {
            console.log('document reference id', ref.id);
            this.setState({
                id: this.state.id + 1
            })
        }).catch((e) => {
            console.log(e);
        })

    }

    fetchMovieRecs = () => {
        firebase.db.collection('movierecs').get()
        .then(query => {
            query.forEach(doc => {
                console.log(doc.data());
                movieRecs.push(doc.data());

            })
        })
        .then(() => {
            this.setState({
                allMovieRecs: movieRecs
            })
        }).catch((e) => {
            console.log(e);
        })
    }

    render() {
        const allPosts = this.state.allMovieRecs.map((movierecs) => {
            return(
                <MovieRecs
                title={movieRecs.title}
                genre={movieRecs.genre}
                />
            )
        })
        return(
            <div>
                <p> This is the Movie Recommendation Board! </p>
                <p> Add a personal movie Recommendation! </p>

                <p> Enter Movie Title:</p>
                <input type="text" value={this.state.title} onChange={this.newTitleFucntion} />

                <p> Enter Movie Genre: </p>
                <input type="text" value={this.state.genre} onChange={this.newGenreFunction} />

                <button onClick={this.saveNewMovieRec}> Save! </button>

                <div className='allMovieRecs'>
                    <button onClick={this.fetchMovieRecs}>Show my Movie Recommendations!</button>
                    {allRecs}
                </div>
            </div>
        )
    }

}

export default MovieRecs;