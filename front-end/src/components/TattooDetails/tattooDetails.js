import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from '../../ducks/actionCreator'
import '../../App.css';
import LeftArrow from '../../assets/left-arrow.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
const { getTattoo, goBack, addToWishlist } = action

class TattooDetails extends Component {
	
	componentDidMount() {
		console.log('tattooId', this.props.tattooId)
		this.props.getTattoo(this.props.tattooId);
	}


  render() {
  	const {tattooDetails, userId} = this.props
  	const tattoo = tattooDetails.map((tattoo,i) => {
      console.log('TEST', tattoo)
  		return (
        <div className='center-details'>
          <div>
    			   <img key={i} src={tattoo.url} alt=""/>           
          </div>
          <div className='tattoo-description'>
            <p className='tattoo-description-entry'>{tattoo.description}</p>
            <button onClick={()=> axios.post('http://localhost:3000/addToWishlist', {imageId: tattoo.id, userId: userId.id}, {withCredentials: true})}>Add to wishlist</button>            
          </div>
        </div>
  			) 
  	})
    return (
    	<div className='container'>
    		{tattoo}
    		<Link to ='/dashboard'><button>GO BACK</button></Link>        
	     </div>
    		
    );
  }
}

const mapStateToProps = state => {
	return {
		loading: state.loading,		
		tattooDetails: state.tattooDetails,
		tattooId: state.tattooId,
    userId: state.userId
	}
}

export default connect(mapStateToProps, {getTattoo,  addToWishlist})(TattooDetails);
