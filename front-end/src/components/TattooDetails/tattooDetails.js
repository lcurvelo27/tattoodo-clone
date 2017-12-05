import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from '../../ducks/actionCreator'
import '../../App.css';
import LeftArrow from '../../assets/left-arrow.svg'
import {Link} from 'react-router-dom'
const { getTattoo, goBack } = action

class TattooDetails extends Component {
	
	componentDidMount() {
		console.log('tattooId', this.props.tattooId)
		this.props.getTattoo(this.props.tattooId);
	}


  render() {
  	const {tattooDetails} = this.props
  	const tattoo = tattooDetails.map((tattoo,i) => {
      console.log('TEST', tattoo)
  		return (
        <div className='center-details'>
          <div>
    			   <img key={i} src={tattoo.url} alt=""/>           
          </div>
          <div className='tattoo-description'>
            <p className='tattoo-description-entry'>{tattoo.description}</p>
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
		tattooId: state.tattooId
	}
}

export default connect(mapStateToProps, {getTattoo, })(TattooDetails);
