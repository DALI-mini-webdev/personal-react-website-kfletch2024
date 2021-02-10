//this stuff isn't working so I'm commenting it out for now so you can see my working react app

/* import React from 'react';

const MoviePosting = (props) => {


    render () {
        var editBoxOrEditButton = null;
        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle}/>
                    <button> submit </button>
                </div>
            )
            
        }
    
        else {
            editBoxOrEditButton = <button onCLick={this.editTitle}>Edit Title</button>
        }
    }

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





deletePosting = () => {
    this.props.delete(this.props.id)
}

editTitle = () => {
    this.setState({editing: true})
}

submit = () => {
    var newName = {
        name: this.state.newTitle
    }

    this.props.save(this.props.id, newName);
    this.setState({editing: false})
}

save = (id, field) => {
this.setState({movies: this.state.movies.update(id, (n) => { return Object.assign({}, n, field);})})
}

export default MoviePosting; */