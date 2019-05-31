import React, { Component } from 'react';



class Content extends Component {
	render() {
		return (
      <div className="content">
        <div className="content__image">
          <img src={require('../../../img/wunmi.png')} alt="img" className="content__image-img"/>
        </div>
       
        <h2 className="content__name">{this.props.data}</h2>
        <h4 className="content__job">{this.props.job}</h4>
       
       
         
      </div>
    )
   
	}
}

export default Content;
