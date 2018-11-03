import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import ListView from './ListView.js';
import Movie from './Movie.js';

var defaultMovies;

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      movieList: [],
      selectedMovie:[],
      query:'',
      isDropdownOpen: false
    }
  }

  componentDidMount(){
    this.fetchMovieData();
  }

  fetchMovieData = () => {

    let apiUrl;

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
      defaultMovies = results;

    })
    .catch((error) => {
        // Code for handling errors
        console.log(error)
        alert("Sorry. There was an error retrieving the data. Please refer to the console for more information")
    });    
  }


  movieSelection = (movie_index) => {
    this.setState({
      selectedMovie: this.state.movieList[movie_index]
    })
  }

  searchingFor = (term) => {    
    if (term) {

      term = term.toLowerCase();  

      this.setState ({
        query:term
      })

      let searchingResults = this.state.movieList.filter( (movie) => movie.fields.title.toLowerCase().includes(term))

      this.setState({
        movieList:searchingResults
      })

    } else {
      console.log(term)
      this.setState ({
        query:'',
        movieList: defaultMovies
      })
    }
  }

  sortByEpisode = () => {
    this.toggleButton();
    this.state.movieList.sort((movie1,movie2) => movie1.fields.episode_id - movie2.fields.episode_id)
  }

  sortByYear = () => {
    this.toggleButton();

    this.state.movieList.sort(
      (movie1,movie2) => {
        let dateA= new Date(movie1.fields.release_date)
        let dateB= new Date(movie2.fields.release_date)
        return dateA - dateB
      }
    )
  }

  toggleButton = () => {
    if (this.state.isDropdownOpen){
      this.setState({
        isDropdownOpen:false
      })
    } else {
      this.setState({
        isDropdownOpen:true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Search 
          sortByEpisode={this.sortByEpisode}
          sortByYear={this.sortByYear}
          searchingFor={this.searchingFor}
          isDropdownOpen={this.state.isDropdownOpen}
          toggleButton={this.toggleButton}
        />
        <div className="container">
          <ListView 
            movieList={this.state.movieList} 
            movieSelection={this.movieSelection} 
          />
          <Movie 
            selectedMovie={this.state.selectedMovie} 
          />
        </div>        
      </div>
    );
  }
}

export default App;
