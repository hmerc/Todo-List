import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createTask } from '../actions/index';

class NewTask extends Component {

	constructor(props){
		super(props);

		this.state = { title: '',hours:0 };
		
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		if(this.props.TODOHOURS < 24){
			this.props.createTask(this.state.title, this.state.hours);
			this.setState({ title: '',hours:0 });
		}
	}

	render() {
    	return (
      		<form onSubmit={this.onFormSubmit} className="task">
      			<h2>Create a new Task</h2>
      			<div className="task__title">
      				<label>Title</label>
      				<input
      					type="text"
						ref="newField"
						className="task__new"
						placeholder="Enter title here"
						value={this.state.title}
						onChange={this.onInputChange}
						name="title"
					/>
					<input type="text"className="task_hours" placeholder="0" value={this.state.hours} onChange={this.onInputChange} name="hours"/>
      			</div>
      			<button type="submit" className="btn btn-secondary">Submit</button>
      		</form>
    	);
  	}

};

function mapStateToProps(state){
	return {
		TODOHOURS: state.list.hoursTODO
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createTask }, dispatch);
}

//whenever we a re passing in a function it needs to be in the 2nd position, the null means we dont need any state here
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);