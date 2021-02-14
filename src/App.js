import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import MovieBoard from "./components/MovieBoard/MovieBoard";

import MovieData from "./components/MovieData/MovieData";

import './App.css';

  function App() {
    return (
      <div className="App">
        <Navbar />
        <MovieBoard />

        <MovieData />
  
      </div>
    );
  }





export default App;
