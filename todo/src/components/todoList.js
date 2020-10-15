import React, { useReducer, useState } from 'react';
import Todo from './todo';
import {reducer,initialState,ADD_ITEM} from './reducers/reducer' ;
import TodoForm from './todoForm';

const TodoList = () =>{

    const[state,dispatch] = useReducer(reducer,initialState);

    const[item,setItem] = useState('');
        
    
  
    const  addItem = e=>{
       e.preventDefault();
        let newItem = {
            id: Date.now(),
            item: item,
            completed:true
        }
        
        console.log('item is added to items List')
      
      }

  


        return(
            <div>
             
                <TodoForm addItem={addItem} setItem={setItem} item={item}/>
                <button onClick={()=>dispatch({type: ADD_ITEM })}>Add Todo</button>
                <div>
                    {this.state.items.map(item=>{
                        return (<Todo item={item}/>)
                    })}
                </div>
               
            </div>
        );
    }
   



export default TodoList