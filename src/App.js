import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Cook some dishes for lunch',
        completed: false
      },
      {
        id: 2,
        title: 'Buy groceries',
        completed: true
      },
      {
        id: 3,
        title: 'Meet a friend',
        completed: false
      }
    ]
  }

  // Toggle todo as either complete or not
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
