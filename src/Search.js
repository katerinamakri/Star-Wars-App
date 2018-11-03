import React, { Component } from 'react';
import './App.css';

class Search extends Component {

	render() {
	
		return (
			<div className="header-container"> 
				<select>
						<option defaultValue>Sort by...</option>
					  <option value="episode">Episode</option>
  					<option value="year">Year</option>
				</select>
				<div className="search-movies-container">
					<i className="fas fa-search"></i>
					<input 
						className="search-input-movies"
						type="text" 
						placeholder="Type to search..."
						value={this.props.query}
		       	onChange={(event) => this.props.updateQuery(event.target.value)}
					/>
				</div>
			</div>
		);
	}
}

export default Search;