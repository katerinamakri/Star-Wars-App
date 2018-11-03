import React, { Component } from 'react';
import './App.css';

class Search extends Component {



	render() {
		let toggleButton = this.props.isDropdownOpen ? "block" : "none";
	
		return (
			<div className="header-container"> 
				<div className="dropdown" >
					<button onClick={() => this.props.toggleButton()}> Sort by... </button>
					<ul className="dropdown-content" style={{ display: toggleButton }}>
						<p> Sort by </p>
					  <li onClick={() => this.props.sortByEpisode(this.value)}> Episode </li>
  					<li> Year </li>
  				</ul>
				</div>

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