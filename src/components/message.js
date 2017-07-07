import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
	render() {
		return (
		<div>{this.props.Message}</div>
		);
	}
}

function mapStateToProps(state){
	  return {
	  	Message:state.list.message
	  };
}


export default connect(mapStateToProps)(Message);