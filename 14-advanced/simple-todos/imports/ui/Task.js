import React, { Component } from 'react';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleCompleted() {
    // Save the completed property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: { completed: !this.props.task.completed }
    });
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.completed}
          onClick={this.toggleCompleted.bind(this)}
        />
        <span className="text">{ this.props.task.text }</span>
      </li>
    )
  }
}
