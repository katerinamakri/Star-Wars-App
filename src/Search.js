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
						<div className="dropdown-paragraph-container"> 
							<p> Sort by </p>
							<button className='close-button' onClick={() => this.props.toggleButton()}> X </button>
						</div>
					  <li onClick={() => this.props.sortByEpisode()}> Episode </li>
  					<li onClick={() => this.props.sortByYear()}> Year </li>
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