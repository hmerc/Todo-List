import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTasks } from '../actions/index.js';
import Task from '../components/task';

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

				<div>
					<Task task={task} key={task.id}></Task>
				</div>
			);
		});

	}


	render() {
    	return (
      		<div className="board">
      			<div className="board__column">{this.renderTasks(this.props.TODO)}</div>
      			<div className="board__column">{this.renderTasks(this.props.PROGRESS)}</div>
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

export default connect(mapStateToProps,{ getTasks })(Board);