import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Đi đá bóng', isComplete: true },
      { title: 'Đi đổ xăng' }
    ];
  }
  
  render() {
    return(
      <div className="App">
        {
          this.todoItems.map((item, index) =>
            < TodoItem key={index} item={item} />
          )
        }
      </div>
    );
  }
}

export default App;
