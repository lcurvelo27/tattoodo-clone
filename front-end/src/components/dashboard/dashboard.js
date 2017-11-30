import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from '../../ducks/actionCreator'
import '../../App.css';
const { getImages } = action

class Dashboard extends Component {
	
	componentDidMount() {
		this.props.getImages();
		console.log(this.props.images)
	}


  render() {
    return (
      <div className="App">
        this is the dashboard 
        <a href='http://localhost:3000/logout'><button>logout</button></a>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		images: state.images 
	}
}

export default connect(mapStateToProps, {getImages})(Dashboard);
