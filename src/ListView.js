import React, { Component } from 'react';
import './App.css';

class ListView extends Component {

	render() {
		return (
			<div className="list-container">
				<ul className="list" >
					{this.props.filteredAndSortedMovieList.map( (movie, index) => (
						<li key={index} onClick={() => this.props.movieSelection(index)}> 
							<p> 
								<span className='episode_id'>EPISODE {movie.fields.episode_id}</span>
								<span className='movie-title'>{movie.fields.title}</span>
								<span className='release_date'>{movie.fields.release_date}</span> 
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ListView;