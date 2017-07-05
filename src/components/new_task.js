import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createTask } from '../actions/index';

class NewTask extends Component {

	constructor(props){
		super(props);

		this.state = { title: '',hours:0 };
		
		this.onInputChange = this.onInputChange.bind(this);
		this.onInputChange2 = this.onInputChange2.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ title: event.target.value});
	}

	onInputChange2(event){
		this.setState({ hours: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.createTask(this.state.title, this.state.hours);
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
					/>
					<input type="text"className="task_hours" placeholder="0" value={this.state.hours} onChange={this.onInputChange2}/>
      			</div>
      			<button type="submit" className="btn btn-secondary">Submit</button>
      		</form>
    	);
  	}

};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createTask }, dispatch);
}

//whenever we a re passing in a function it needs to be in the 2nd position, the null means we dont need any state here
export default connect(null, mapDispatchToProps)(NewTask);