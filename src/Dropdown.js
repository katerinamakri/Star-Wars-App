import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {

	 constructor(props){
    super(props)

    this.state = {
      isDropdownOpen: false
    }
  }

	toggleDropdown = () => {
    
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
		let toggleDropdown = this.state.isDropdownOpen ? "block" : "none";

		return (
			<div className="dropdown" >
				<button onClick={() => this.toggleDropdown()}> Sort by... </button>
				<ul className="dropdown-content" style={{ display: toggleDropdown }}>
					<div className="dropdown-paragraph-container"> 
						<p> Sort by </p>
						<button className='close-button' onClick={() => this.toggleDropdown()}> X </button>
					</div>
				  <li onClick={() => {this.props.sortByEpisode(); this.toggleDropdown()} }> Episode </li>
  				<li onClick={() => {this.props.sortByYear(); this.toggleDropdown()} }> Year </li>
  			</ul>
  		</div>			
		);
	}
}

export default Dropdown;