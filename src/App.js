import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import * as uuid from 'uuid';

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Cook some dishes for lunch',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Buy groceries',
        completed: true
      },
      {
        id: uuid.v4(),
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

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      complete: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>  
        </div>
      </div>
    );
  }
}

export default App;
