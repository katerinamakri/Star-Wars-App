import React, { Component } from 'react';
import './App.css';

class Search extends Component {

	render() {
				      //  	value ={this.props.query}
		       	// onChange={(event) => this.props.updateQuery(event.target.value)}

		return (
			<div className="header-container"> 
				<select>
						<option value="volvo" defaultValue>Sort by...</option>
					  <option value="volvo">Episode</option>
  					<option value="saab">Year</option>
				</select>
				<div className="search-movies-container">
					<i className="fas fa-search"></i>
					<input 
						className="search-input-movies"
						type="text" 
						placeholder="Type to search..."
					/>
				</div>
			</div>
		);
	}
}

export default Search;