import { useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer"



const init = () => {

    return JSON.parse( localStorage.getItem( 'state' )) || []
  

  }


export const useTodo = (  ) => {

    const [ state, dispatch ] = useReducer( todoReducer, [], init)    
    
    
    

    useEffect(() => {
        localStorage.setItem( 'state', JSON.stringify( state ) )
      }, [state]);
  
  
      const todoHandler = ( todo ) => {
  
        const action = {
          type: '[TODO] add todo',
          payload: todo,
        }
  
        dispatch( action )
  
      }  
      
      const deleteHandler = ( id ) => {
        
        const action = {
          type: '[TODO] remove todo',
          payload: id
        }
  
        dispatch( action )
      }
  
      const toggleHandler  = ( id ) => {
        
        const action = {
          type: '[TODO] toggle todo',
          payload: id
        }
  
        dispatch( action )
      }


  

      return{

        toggleHandler,
        todoCount: state.length,
        pendingCount: state.filter( todo => !todo.done ).length,
        deleteHandler,
        todoHandler,
        state,
        


      }
  
}

