import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moveProgress, moveDone, deleteTask, moveToDo, generateMessage,editTask } from '../actions/index.js';
import EditTask from './edit_task';

class Task extends Component {

	constructor(props) {
		super(props);
	}

	moveToProgress(task){
		if(parseInt(this.props.PROGRESSHOURS,10) + parseInt(task.hours,10) <= 8){
			this.props.moveProgress(task)
		} else {
			this.props.generateMessage('PROGRESS cannot have more than 8 hours of tasks');
		}
	}

	render(){

		if(this.props.showEditTask === false){

			const taskState = this.props.task.state;
			
			return (
				<div className="task">
					<div className="task__title">
						{this.props.task.title} 
						<span 
							onClick={() => this.props.deleteTask(this.props.task)} 
							className={taskState !== 'PROGRESS' && taskState !== 'DONE' ? 'task__delete' : 'hidden'}>X</span>
					</div>
					<div className="task__description">
						{this.props.task.description} 
					</div>
					<div>
						<label>Hours:</label>{this.props.task.hours}
					</div>
					<div className={taskState === 'TODO' && taskState !== 'DONE' ? 'task__buttons' : 'hidden'} >
						<button onClick={() => this.moveToProgress(this.props.task)}> START</button>
						<button onClick={() => this.props.editTask(true)}>EDIT</button>
					</div>

					<div className={taskState === 'PROGRESS' && taskState !== 'DONE' ? 'task__buttons' : 'hidden'} >
						<button onClick={() => this.props.moveToDo(this.props.task)}>TODO</button>
						<button onClick={() => this.props.moveDone(this.props.task)}> FINISH</button>
					</div>
				</div>
			);
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