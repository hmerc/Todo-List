import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { editTask, editSaveTask } from '../actions/index';

class EditTask extends Component {


	onFormSubmit(props){
		console.log(props);
		this.props.editSaveTask(props);
		this.props.editTask(false);
	}

	render() {

		const { fields : {title, hours, description}, handleSubmit } = this.props;

    	return (
    		<div className="task">
      			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="task--new">
      				<div className="task__title">
      					<input type="text" ref="newField" {...title} />
					    </div>
              <div className="task__description">
                <textarea type="text" className="form-control" {...description} />
              </div>
					    <div className="task__hours">
						    <input type="number" className="task_hours" {...hours} />
      				</div>
      				<button type="submit" className="task--new__add">Save</button>
      			</form>
      		</div>
    	);
  	}

};

function mapStateToProps(state, props) {
 	return {
    	initialValues: {
     		title: props.task.title,
      	hours: props.task.hours,
        description: props.task.description
    	}
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ editTask, editSaveTask }, dispatch);
}

export default reduxForm({
form: 'EditForm',
fields: ['title','hours','description'],
enableReinitialize : true
}, mapStateToProps, mapDispatchToProps)(EditTask);