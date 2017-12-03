import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from '../../ducks/actionCreator'
import '../../App.css';
import LeftArrow from '../../assets/left-arrow.svg'
import {Link} from 'react-router-dom';
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
    	<div className='container'>
    	 <p>Find your next tattoo</p>
    	 <a href='http://localhost:3000/logout'><button>logout</button></a>
	       <div className="App">
	       <img src={LeftArrow} alt="arrow" id='leftArrow'/>
	         {images}
	        
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
