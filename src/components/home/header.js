import React, { Component } from 'react';
import Title from './title/title';
import Nav from './nav/nav'


class Header extends Component {
	render() {
		return (
					<header class="header">
					<Title name="Omowunmi Sogunle" />
					<Nav />
					</header>  
		);
	}
}
  
export default Header;
