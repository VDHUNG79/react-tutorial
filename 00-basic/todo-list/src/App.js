import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Buy Snack', isComplete: true },
      { title: 'Play football', isComplete: true },
      { title: 'Fuel the car' }
    ];
  }
  
  render() {
    return <div className="App">
        {this.todoItems.length > 0 && this.todoItems.map((item, index) => (
          < TodoItem key={index} item={item} />
        ))}
        { this.todoItems.length === 0 && 'Nothing here!'}
      </div>
  }
}

export default App;
