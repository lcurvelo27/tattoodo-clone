import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from '../../ducks/actionCreator'
import './dashboard.css';
import LeftArrow from '../../assets/left-arrow.svg'
import {Link} from 'react-router-dom';
import Header from '../header/header'
import axios from 'axios'
const { getImages, pickTattoo, getSession } = action

class Dashboard extends Component {
	
	componentDidMount() {
		var user;
		this.props.getImages();
		axios.get('http://localhost:3000/auth/me', {withCredentials: true})
			.then(response => {
				console.log(response.data)				
			 	this.props.getSession(response.data)
			})
	}


  render() {  	
  	const images = this.props.images.map((image, i)=>{
		return(
				<Link to={`/tattoo/`+ image.id }><img key={i} src={image.url} alt="image" onClick={()=> this.props.pickTattoo(image.id)}/></Link>
			)
  	})
    return (
    	<div>
    		<Header />
	    	<div className='container'>
	    	 <p className='dashboard-text'>Find your next tattoo</p>
		       <div className="images-carousel">
		       <img src={LeftArrow} alt="arrow" id='leftArrow'/>
		         {images}		        
		       </div>
		     </div>
		  </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		images: state.images,
		tattooId: state.tattooId,
		userSession: state.userSession
	}
}

export default connect(mapStateToProps, {getImages, pickTattoo, getSession})(Dashboard);
