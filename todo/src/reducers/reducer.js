
export const initialState = {
    items:[
        {item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }]
    }
    
  
export const ADD_ITEM = 'ADD_ITEM';

export const reducer = (state,action)=>{

    switch(action.type){
        case ADD_ITEM:
            let newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            }
            return {...state,items: [...state.items,newItem]};
        default: 
            return state;
    }
}