import React from 'react';
import './App.css';
import Header from './components/Header';
import TasksList from './components/TasksList';


function App() {

  return (  
    <div>
      <Header></Header> 
      <TasksList></TasksList> 
    </div>
  );
}

export default App;
