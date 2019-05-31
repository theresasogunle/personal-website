import React, { Component } from 'react';
import Header from './header'
import Content from './content/content'


import './../home.scss'
class Home extends Component {
	render() {
		return (
			<div className="body">
				<div className="hero">
					<Header/>
				 <Content 
				 data="Hi, I'm Omowunmi Theresa Sogunle"
				 job="I'm a developer"
				 />
				</div>
			</div>
		);
	}
}

export default Home;
