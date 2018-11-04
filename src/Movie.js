import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
	render(){

		if ( (this.props.query === '' && this.props.selectedCard.length === 0) || (this.props.selectedMovie.fields === undefined))  {
			return (
				<div className="movie-container">
					<div className="paragraph-container">
						<p>No movie selected</p>
					</div>
				</div>
			)
		} else {		

			const { title, opening_crawl, director } = this.props.selectedMovie.fields;
			
			return (
				<div className="movie-container">
						<h2> {title} </h2>
						<p> {opening_crawl}</p>
						<p> Directed by: <span> {director} </span></p>
				</div>
			);
		}
	}
}

export default Movie;