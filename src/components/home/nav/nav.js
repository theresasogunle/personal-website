import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div className="header__nav">
				<Link className="header__nav-item" to="/">
					Home
				</Link>
				<Link className="header__nav-item" to="/about">
					About
				</Link>
				<Link href="/" className="header__nav-item">
					Services
				</Link>
				<Link href="/" className="header__nav-item">
					Work
				</Link>
				<Link to="/contact" className="header__nav-item">
					Contact
				</Link>

				<div class="navigation">
					<input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
					<label for="navi-toggle" class="navigation__button">
						<span class="navigation__icon">&nbsp;</span>
					</label>
					<div class="navigation__background">&nbsp;</div>

					<div className="navigation__nav">
						<Link className="navigation__nav-item" to="/">
							Home
						</Link>
						<Link className="navigation__nav-item" to="/about">
							About
						</Link>
						<Link href="/" className="navigation__nav-item">
							Services
						</Link>
						<Link href="/" className="navigation__nav-item">
							Work
						</Link>
						<Link to="/contact" className="navigation__nav-item">
							Contact
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
