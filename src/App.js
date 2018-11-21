import React, { Component } from "react";
import "./App.css";
import Task from './components/task';
import Title from './components/title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: []
    };
  }

  handleTaskChange = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: newTasks
    });
  };

  render() {
    return (
      <div className="container">
        <Title/>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newTask}
            onChange={this.handleTaskChange}
            type="text"
            className="new-task"
          />
        </form>
        {this.state.tasks.map(task => <Task />)}
      </div>
    );
  }
}

export default App;
