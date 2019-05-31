import React, { Component } from 'react';
import Header from '../home/header';
import   './about.scss'


class About extends Component {
	render() {
		return (
			<div className="about">
        <Header/>
				<h2 className="about__me">About Me</h2>
    <div className="about__content">
      <div className="about__left">
        <img className="about__img"src={require('../../img/wunmi.png')} alt="img"/>
      </div>
      <div className="about__right">
        <p className="about__right-graduate">Graduate of Computer Science (B.Tech)</p>
        <p className="about__right-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum minima aut saepe veniam necessitatibus, aliquam eius! Non voluptatibus tempora est voluptatum consequatur eos commodi,
           veritatis enim, corrupti at corporis!</p>
      </div>
    </div>
       
        
			</div>
		);
	}
}

export default About;
