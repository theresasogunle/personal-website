import React, { Component } from 'react';
import Header from '../home/header';



class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact__header">
					<Header />
				</div>

				<div className="contact__text">I'ld love to hear from you!</div>

				<div class="contact__footer">
					<div class="contact__footer__icon">
						<div className="contact__footer__details">
							<img src={require('../../img/ig.png')} alt="img" className="contact__footer__icon-img" />
							<a
								href="  https://www.instagram.com/teessa__/?hl=en"
								className="contact__footer__icon-text"
							>
								INSTAGRAM
							</a>
						</div>

						<div className="contact__footer__details">
							<img src={require('../../img/li.png')} alt="img" className="contact__footer__icon-img" />
							<a
								href="https://www.linkedin.com/in/omowunmi-sogunle-b88b01107/"
								className="contact__footer__icon-text"
							>
								LINKED IN
							</a>
						</div>
						<div className="contact__footer__details">
							<img src={require('../../img/tw.png')} alt="img" className="contact__footer__icon-img" />
							<a href="https://twitter.com/omomimii" className="contact__footer__icon-text">
								TWITTER
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
