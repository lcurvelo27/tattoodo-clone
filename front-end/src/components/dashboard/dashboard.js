import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from '../../ducks/actionCreator'
import './dashboard.css';
import LeftArrow from '../../assets/left-arrow.svg'
import {Link} from 'react-router-dom';
import Header from '../header/header'
const { getImages, pickTattoo } = action

class Dashboard extends Component {
	
	componentDidMount() {
		this.props.getImages();
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
		tattooId: state.tattooId
	}
}

export default connect(mapStateToProps, {getImages, pickTattoo})(Dashboard);
