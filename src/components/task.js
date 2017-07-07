import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moveProgress, moveDone, deleteTask, moveToDo, generateMessage } from '../actions/index.js';

class Task extends Component {

	moveToProgress(task){
		if((this.props.PROGRESSHOURS < 8) && (this.props.PROGRESSHOURS + task.hours < 8)){
			this.props.moveProgress(task)
		} else {
			this.props.generateMessage('PROGRESS cannot have more then 8 hours of text');
		}
	}

	render(){

		if(this.props.task.state === 'TODO' && this.props.task.state !== 'DONE'){
			return (
				<div>
					{this.props.task.title} {this.props.task.hours} hours
					<div>
						<button onClick={() => this.moveToProgress(this.props.task)}> Start</button>
						<button onClick={() => this.props.deleteTask(this.props.task)}> Delete</button>
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


	}
}

function mapStateToProps(state){
	  return {
	  	PROGRESSHOURS:state.list.hoursPROGRESS
	  };
}

export default connect(mapStateToProps,{ moveProgress, moveDone, deleteTask, moveToDo, generateMessage })(Task);