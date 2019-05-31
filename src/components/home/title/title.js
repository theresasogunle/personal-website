import React, { Component } from 'react';



class Title extends Component {
	render() {
		return <div className="header__title"> {this.props.name}</div>;
	}
}

export default Title;
