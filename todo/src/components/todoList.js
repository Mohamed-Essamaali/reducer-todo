import React, { useReducer } from 'react';
import Todo from './todo';
import {reducer,initialState,ADD_ITEM,TOGGLE_ITEM,CLEAR_ITEM} from '../reducers/reducer' ;
import TodoForm from './todoForm';

const TodoList = () =>{

    const[state,dispatch] = useReducer(reducer,initialState);
    console.log('state in todolist',state)

    const  addItem = (e,item)=>{
       e.preventDefault();
     dispatch({type: ADD_ITEM, payload: item.todo})
        
        console.log('addItem called')
      
      }
      const  toggle = (itemId)=>{
         
          dispatch({type: TOGGLE_ITEM, payload: itemId})
          console.log('toggle item id called')
        
       
       }
       const  clearItem = (e)=>{
        e.preventDefault();
            dispatch({type: CLEAR_ITEM})
         
         console.log('cleared item is called')
       
       }



        return(
            <div>
             
                <TodoForm addItem = {addItem}/>
                
                <div>
                    {state.todos.map(todo=>{
                        return (<Todo key={todo.id} todo={todo} toggle={toggle}/>)
                    })}
                    <button onClick = {clearItem}>
                           Clear Completed Task
                     </button>
                </div>
               
            </div>
        );
    }
   



export default TodoList