import React, { Component } from 'react';
import axios from 'axios';
import action from '../../ducks/actionCreator'
import {connect} from 'react-redux'
const {getWishlist} = action

class Wishlist extends Component {
	componentDidMount(){
		this.props.getWishlist(this.props.userId.id)
	}

	render(){
		var userWishlist = this.props.wishlist.map((image,i) => {
			return (
				<img key={i} src={image.url} alt="image"/>
				)
		})
		return (
			<div>
				{userWishlist}
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		wishlist: state.wishlist,
		userId: state.userId
	}
}
export default connect(mapStateToProps, {getWishlist})(Wishlist)