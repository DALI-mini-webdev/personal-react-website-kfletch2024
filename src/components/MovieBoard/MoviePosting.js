

import React from 'react';

const MoviePosting = (props) => {
    return (
        <div>
            <p> {props.name}, {props.genre} </p>
            <img src ={ props.movieURL } alt='Image' />
        </div>
    );
}

/*deletePosting = () => {
    this.props.delete(this.props.id)
};

editTitle = () => {
    this.setState({editing: true})
};

submit = () => {
    var newName = {
        name: this.state.newTitle
    }

    this.props.save(this.props.id, newName);
    this.setState({editing: false})
};

save = (id, field) => {
this.setState({movies: this.state.movies.update(id, (n) => { return Object.assign({}, n, field);})})
}; */

//const MoviePosting = (props) => {

    /*render () {
         
        var editBoxOrEditButton = null;
        if(this.state.editing) {
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle}/>
                    <button> Submit </button>
                </div>
            )

            return (
                <div>
                    <p>{props.name}, {props.genre}</p>
                    <img src={ props.movieURL } alt='Image' />
                    <button onClick={this.deletePosting}> Delete </button>
                    <button onClick={this.editTitle}> Edit Title </button>
                    <button onClick={this.submit}> Submit </button>
                </div>
            )
            
        }

        else {
            editBoxOrEditButton = <button onCLick={this.editTitle}>Edit Title</button>
        }  
        
        
    
    } */

    






export default MoviePosting; 