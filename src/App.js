import React, { Component } from "react";
import "./App.css";
import logo from './logo.svg';
import Title from './components/title';
import Input from './components/input';
import TaskList from './components/task-list';
import Layout from './components/layout';
import Logo from './components/logo';

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
    if(this.state.newTask === "") {
      alert('Ingresa una tarea')
    } else {
      let newTasks = this.state.tasks;
      newTasks.push(this.state.newTask);
      this.setState({
        newTask: "",
        tasks: newTasks
      });
    }
  };

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    return (
      <Layout>
        <Title/>
        <Logo />
        <Input 
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        />
        <TaskList 
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
        />
      </Layout>
    );
  }
}

export default App;
