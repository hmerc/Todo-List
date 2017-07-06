import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTasks, moveProgress, moveDone } from '../actions/index.js';

class Board extends Component {

	componentWillMount() {
		this.props.getTasks();
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.TODO.length > 1){
			this.props.getTasks();
		}
	}

	renderTasks(tasksArray) {
		return tasksArray.map((task) => {
			return(
				<div key={task.id}>
					{task.title}
					<button onClick={() => this.props.moveProgress(task)}> Progress</button>
				</div>
			);
		});

	}

	renderTasksProgress() {
		return this.props.PROGRESS.map((task) => {
			return(
				<div key={task.id}>
					{task.title}
					<button onClick={() => this.props.moveDone(task)}> Progress</button>
				</div>
			);
		});

	}


	render() {
    	return (
      		<div className="board">
      			<div className="board__column">{this.renderTasks(this.props.TODO)}</div>
      			<div className="board__column">{this.renderTasksProgress()}</div>
      			<div className="board__column">{this.renderTasks(this.props.DONE)}</div>
      		</div>
    	)
  	}

};


function mapStateToProps(state){
  return {
    TODO: state.tasks.filter(task => task.state === 'TODO'),
    PROGRESS: state.tasks.filter(task => task.state === 'PROGRESS'),
    DONE: state.tasks.filter(task => task.state === 'DONE')
  };
}

export default connect(mapStateToProps,{ getTasks, moveProgress, moveDone })(Board);