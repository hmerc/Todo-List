import React, { Component } from 'react';

import Board from '../containers/board';
import NewTask from '../components/new_task';

export default class App extends Component {
  render() {
    return (
      <div>
      	<NewTask/>
      	<Board/>
      </div>
    );
  }
}
