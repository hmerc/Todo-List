import React, { Component } from 'react';

import Board from '../containers/board';
import NewTask from '../components/new_task';
import Message from '../components/message';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>TO DO List</h1>
      	<Message/>
      	<NewTask/>
      	<Board/>
      </div>
    );
  }
}
