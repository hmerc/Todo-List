import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { createTask, generateMessage } from '../actions/index';

class NewTask extends Component {


	onFormSubmit(props){
		if((parseInt(this.props.TODOHOURS,10) + parseInt(props.hours,10)) <= 24) {
			this.props.createTask(props);
			this.props.resetForm();
			this.props.generateMessage('');
		} else {
			this.props.generateMessage('To-do List cannot have more than 24 hours of tasks');
		}
	}

	render() {

		const { fields : {title, hours, description}, handleSubmit, resetForm } = this.props;

    	return (
    		<div className="task task--new">
      			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
      				<div className="task__heading">Add New Task</div>
      				<div className="task__title">
      					<label>Title: </label>
      					<input
      						type="text"
							ref="newField"
							{...title}
						/>
						<div className="task__help">
							{title.touched ? title.error : ''}
						</div>
					</div>
					<div className="task__description">
						<label>Description</label>
						<textarea type="text" {...description} value={description.value || ''} />
						<div className="task__help">
							{description.touched ? description.error : ''}
						</div>
					</div>
					<div className="task__hours">
						<label>Hours: </label>
						<input type="number" {...hours} />
						<div className="task__help">
							{hours.touched ? hours.error : ''}
						</div>
      				</div>
      				<div className="task__buttons">
      					<button type="submit" className="task--new__add">ADD</button>
      				</div>
      			</form>
      		</div>
    	);
  	}

};

function validate(values) {
	const errors = {};
	if(!values.title) {
		errors.title = 'Enter a title';
	}
	if(!values.hours) {
		errors.hours = 'Enter hours';
	}
	if(!values.description) {
		errors.description = 'Enter a description';
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
	return bindActionCreators({ createTask, generateMessage }, dispatch);
}

export default reduxForm({
form: 'PostsNewForm',
fields: ['title','hours','description'],
validate
}, mapStateToProps, mapDispatchToProps)(NewTask);