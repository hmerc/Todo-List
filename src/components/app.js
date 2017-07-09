import React, { Component } from 'react';

import Board from '../containers/board';

import Message from '../components/message';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>To-do List</h1>
      	<Message/>
      	<Board/>
      </div>
    );
  }
}
