import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import ListView from './ListView.js';
import Movie from './Movie.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      movieList: []

    }
  }

  componentDidMount(){
    this.fetchMovieData();
  }

  fetchMovieData = () => {

    let apiUrl;

    // this.setState({query: name});

    apiUrl = 'https://star-wars-api.herokuapp.com/films'

    fetch(apiUrl, { 
      method: 'GET', 
      headers: {
        "Content-Type": "application/json"
      } 
    })
    .then((response) => {

      if (response.status === 404){
        console.log ('No data')
      } 
      return response.json();
    })
    .then((results) => {
       
      this.setState({
        movieList: results
      })  

    })
    .catch((error) => {
        // Code for handling errors
        console.log(error)
        alert("Sorry. There was an error retrieving the data. Please refer to the console for more information")
    });    

  }

  render() {

    console.log(this.state.movieList)
    return (
      <div className="App">
        <Search />
        <div className="container">
          <ListView movieList={this.state.movieList}/>
          <Movie />
        </div>        
      </div>
    );
  }
}

export default App;
