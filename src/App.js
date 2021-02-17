import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import MovieBoard from "./components/MovieBoard/MovieBoard";
import MovieData from "./components/MovieData/MovieData";
import MovieRecs from "./components/MovieRecs";
import './App.css';
import firebase from './firebase/index';



  function App() {
    console.log(firebase);
    console.log(firebase.db);
    return (
      <div className="App">
        <Navbar />
        <MovieBoard />
        <MovieRecs />
        <MovieData />
  
      </div>
    );
  }





export default App;
