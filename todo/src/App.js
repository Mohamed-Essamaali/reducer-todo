import React,{useState} from 'react';
import './App.css';
import TodoList from './components/todoList';
import {reducer} from './reducers/reducer' 

function App() {

const[todos,setTodos] = useState([])


  return (
    <div className="App">
      <h1>Add Todos</h1>
       <TodoList />
      
    </div>
  );
}

export default App;
