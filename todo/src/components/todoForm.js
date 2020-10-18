import React, { useState } from 'react'

const TodoForm = props=>{
    
    const[item,setItem]= useState({task:''})
   
   const handleChange = e=>{
        setItem({...item,[e.target.name]:e.target.value})
        
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.addItem(e,item)
        setItem({task:''});
        console.log('form submitted')
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='item'>Enter Todo</label>
            <input 
                id='todo' 
                name='todo' 
                value={item.task} 
                onChange={handleChange} 
                palceholder="Enter your item todo"
            />
             <button >Add Todo</button>
        </form>
    </div>
    )
}
export default TodoForm