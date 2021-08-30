import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    
     
      </div>
  );
}

export default App;
