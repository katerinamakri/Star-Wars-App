import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import ListView from './ListView.js';
import Movie from './Movie.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Search />
        <div className="container">
          <ListView />
          <Movie />
        </div>        
      </div>
    );
  }
}

export default App;
