import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { editTask, editSaveTask } from '../actions/index';

class EditTask extends Component {


	onFormSubmit(props){
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
                <div className="task__help">
                  {title.touched ? title.error : ''}
                </div>
					    </div>
              <div className="task__description">
                <textarea type="text" className="form-control" {...description} />
                <div className="task__help">
                  {description.touched ? description.error : ''}
                </div>
              </div>
					    <div className="task__hours">
						    <input type="number" className="task_hours" {...hours} />
                <div className="task__help">
                  {hours.touched ? hours.error : ''}
                </div>
      				</div>
              <div className="task__buttons">
      				  <button type="submit" className="task--new__add">Save</button>
              </div>
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



function mapDispatchToProps(dispatch) {
	return bindActionCreators({ editTask, editSaveTask }, dispatch);
}

export default reduxForm({
form: 'EditForm',
fields: ['title','hours','description'],
validate,
enableReinitialize : true
}, mapStateToProps, mapDispatchToProps)(EditTask);