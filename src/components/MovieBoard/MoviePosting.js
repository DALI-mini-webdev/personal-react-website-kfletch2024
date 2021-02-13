
import React from 'react';

const MoviePosting = (props) => {
    return (
        <div>
            <p> {props.name}, {props.genre} </p>
            <img src ={ props.movieURL } alt='Image' />
        </div>
    );
}


    

export default MoviePosting; 