import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moveProgress, moveDone, deleteTask } from '../actions/index.js';

class Task extends Component {
  render(){

    return (
      <div>
		{this.props.task.title}
		{ this.props.task.state === 'TODO' ?
			<div>
			<button onClick={() => this.props.moveProgress(this.props.task)}> Progress</button>
			<button onClick={() => this.props.deleteTask(this.props.task)}> Delete</button>
			</div>
		:
			<button onClick={() => this.props.moveDone(this.props.task)}> Done</button>
		}
	  </div>
    );
  }
}

export default connect(null,{ moveProgress, moveDone, deleteTask })(Task);