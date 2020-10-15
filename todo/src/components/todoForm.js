import React, { useState } from 'react'

const TodoForm = props=>{
    
    handleChange = e=>{
        props.setItem({...props.item,item:e.target.value})
        console.log('item',item)
    }

    return(
        <div>
        <form onSubmit={props.addItem}>
            <label htmlFor='item'>Enter Todo</label>
            <input 
                id='item' 
                name='item' 
                value={props.item} 
                onChange={handleChange} 
                palceholder="Enter your item todo"
            />
             
        </form>
    </div>
    )
}
export default TodoForm