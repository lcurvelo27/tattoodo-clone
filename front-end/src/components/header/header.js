import React, {Component} from 'react'; 
import profileLogo from '../../assets/userLogo.svg';
import './header.css'

export default class Header extends Component {
	render(){
		return(
			<div className='header-wrapper'>
				<div className='logo-container'>
					<h3>GET BLASTED!</h3>
				</div>
				<div className='nav-bar'>
					<ul className='nav-bar-options'>
						<li className='nav-bar-list'>Tattoos</li>
						<li className='nav-bar-list'>About</li>
						<li clasName='nav-bar-list'><img src={profileLogo} alt="logo" id='user-logo'/></li>
					</ul>
				</div>
			</div>
		)
	}
}