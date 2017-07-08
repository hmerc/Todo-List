import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { createTask } from '../actions/index';

class NewTask extends Component {


	onFormSubmit(props){
		if(this.props.TODOHOURS < 24){
			this.props.createTask(props);
		}
	}

	render() {

		const { fields : {title, hours, description}, handleSubmit } = this.props;

    	return (
    		<div>
    			<h2>Create a new Task</h2>
      			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="task--new">
      				<div className="task--new__title">
      					<label>Title: </label>
      					<input
      						type="text"
							ref="newField"
							{...title}
						/>
						<div className="text-help">
							{title.touched ? title.error : ''}
						</div>
					</div>
					<div className="task--new__description">
						<label>Description</label>
						<textarea type="text" className="form-control" {...description} />
					</div>
					<div className="task--new__hours">
						<label>Hours: </label>
						<input type="number" className="task_hours" {...hours} />
						<button type="submit" className="task--new__add">ADD</button>
						<div className="text-help">
							{hours.touched ? hours.error : ''}
						</div>
      				</div>
      				
      			</form>
      		</div>
    	);
  	}

};

function validate(values) {
	const errors = {};
	if(!values.title) {
		errors.title = 'Enter a Title';
	}
	if(!values.hours) {
		errors.hours = 'Enter hours';
	}

	if(values.hours > 8){
		errors.hours = 'Task Time cannot be more than 8 hours';
	}

	return errors;
}

function mapStateToProps(state){
	return {
		TODOHOURS: state.list.hoursTODO
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createTask }, dispatch);
}

//whenever we a re passing in a function it needs to be in the 2nd position, the null means we dont need any state here
//export default connect(mapStateToProps, mapDispatchToProps)(NewTask);

export default reduxForm({
form: 'PostsNewForm',
fields: ['title','hours','description'],
validate
}, mapStateToProps, mapDispatchToProps)(NewTask);