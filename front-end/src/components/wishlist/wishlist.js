import React, { Component } from 'react';
import axios from 'axios';

class Wishlist extends Component {
	
	componentDidMount(){
		axios.get('http://localhost:3000/wishlist', {withCredentials: true})
			.then(response => {
				console.log(response)
			})
	}

	render(){
		return (
			<div>
				this is the wishlist
			</div>
			)
	}
}

export default Wishlist