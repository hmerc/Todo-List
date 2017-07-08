import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moveProgress, moveDone, deleteTask, moveToDo, generateMessage,editTask } from '../actions/index.js';
import EditTask from './edit_task';

class Task extends Component {

	constructor(props) {
		super(props);
	}

	moveToProgress(task){
		if((this.props.PROGRESSHOURS < 8) && (this.props.PROGRESSHOURS + task.hours < 8)){
			this.props.moveProgress(task)
		} else {
			this.props.generateMessage('PROGRESS cannot have more then 8 hours of text');
		}
	}

	render(){

		if(this.props.showEditTask === false){
			if(this.props.task.state === 'TODO' && this.props.task.state !== 'DONE'){
				return (
					<div>
						{this.props.task.title} {this.props.task.hours} hours
						<div>
							<button onClick={() => this.moveToProgress(this.props.task)}> Start</button>
							<button onClick={() => this.props.deleteTask(this.props.task)}> Delete</button>
							<button onClick={() => this.props.editTask(true)}>Edit</button>
						</div>
					</div>
				);
			}

			if(this.props.task.state === 'PROGRESS' && this.props.task.state !== 'DONE'){
    			return (
      				<div>
						{this.props.task.title}
						<div>
							<button onClick={() => this.props.moveToDo(this.props.task)}>TODO</button>
							<button onClick={() => this.props.moveDone(this.props.task)}> Finish</button>
						</div>
					</div>
    			);
  			} else {
  				return (
      				<div>
						{this.props.task.title}
					</div>
				);
  			}
  		} else {
  			return ( <EditTask task={this.props.task}/>);
  		}
	}
}

function mapStateToProps(state){
	  return {
	  	PROGRESSHOURS:state.list.hoursPROGRESS,
	  	showEditTask: state.list.editTask
	  };
}

export default connect(mapStateToProps,{ moveProgress, moveDone, deleteTask, moveToDo, generateMessage,editTask })(Task);