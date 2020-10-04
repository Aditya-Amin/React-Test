import React, { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import NavBar from './components/NavBar';
import { TodoProvider } from './components/TodoContainer/TodoContext';

function App() {
  
  return (
    <div className="App">
      <TodoProvider>
        <NavBar/>
        <TodoContainer/>
      </TodoProvider>
    </div>
  );
}

export default App;
