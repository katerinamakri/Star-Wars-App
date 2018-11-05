import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js'

class Search extends Component {

	render() {
	
		return (
			<div className="header-container"> 
				<Dropdown 
					sortByEpisode={this.props.sortByEpisode}
					sortByYear={this.props.sortByYear}	
				/>
				<div className="search-movies-container">
					<i className="fas fa-search"></i>
					<input 
						className="search-input-movies"
						type="text" 
						placeholder="Type to search..."
						value={this.props.query}
						onChange={(event) => this.props.searchingFor(event.target.value)}
					/>
				</div>
			</div>
		);
	}
}

export default Search;