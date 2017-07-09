import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTasks } from '../actions/index.js';
import Task from '../components/task';
import NewTask from '../components/new_task';

class Board extends Component {

  constructor(props){
    super(props);

    this.state = { todoOpen: true, progressOpen:true, completeOpen:true };
    this.openColumn = this.openColumn.bind(this);
  }

	componentWillMount() {
		this.props.getTasks();
	}

  openColumn(event){

    this.setState({ todoOpen: !this.state.todoOpen});
    console.log(this.state.todoOpen);

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
      					<h2>To-do List <span className="board__hours">{this.props.TODOHOURS} Hours <button className="task__mobile" onClick={() => this.openColumn(event)}>-</button></span></h2>
                <div className={this.state.todoOpen ? 'show' : 'hide'}>
      					   {this.renderTasks(this.props.TODO)}
                    <NewTask />
                </div>
      				</div>
      				<div className="board__column">
      					<h2>In Progress <span className="board__hours">{this.props.PROGRESSHOURS} Hours</span></h2>
      					{this.renderTasks(this.props.PROGRESS)}
      				</div>
      				<div className="board__column">
      					<h2>Completed</h2>
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