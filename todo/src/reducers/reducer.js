
export const initialState = {
    todos:[
        {task: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }]
    }
    
  
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';

export const reducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD_ITEM:
            let newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false
            }
            return {...state,todos: [...state.todos,newTask]};

            case TOGGLE_ITEM:
                return {...state,todos: state.todos.map(todo=>{
                    if(todo.id===action.payload)
                    return {...todo,completed: !todo.completed}
                })}

                case CLEAR_ITEM:
                    return {...state,todos: state.todos.filter(todo=>!todo.completed)}
        default: 
            return state;
    }
}