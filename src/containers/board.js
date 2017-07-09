import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTasks } from '../actions/index.js';
import Task from '../components/task';

class Board extends Component {

	componentWillMount() {
		this.props.getTasks();
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
    		<div>
      			<div className="board">
      				<div className="board__column">
      					<h2>To Do <span className="board__hours">[{this.props.TODOHOURS} Hours]</span></h2>
      					{this.renderTasks(this.props.TODO)}
      				</div>
      				<div className="board__column">
      					<h2>Progress <span className="board__hours">[{this.props.PROGRESSHOURS} Hours]</span></h2>
      					{this.renderTasks(this.props.PROGRESS)}
      				</div>
      				<div className="board__column">
      					<h2>Done</h2>
      					{this.renderTasks(this.props.DONE)}
      				</div>
      			</div>
      		</div>
    	)
  	}

};


function mapStateToProps(state){
  return {
    TODO: state.list.tasks.filter(task => task.state === 'TODO'),
    PROGRESS: state.list.tasks.filter(task => task.state === 'PROGRESS'),
    DONE: state.list.tasks.filter(task => task.state === 'DONE'),
    TODOHOURS: state.list.hoursTODO,
    PROGRESSHOURS:state.list.hoursPROGRESS
  };
}

export default connect(mapStateToProps,{ getTasks })(Board);