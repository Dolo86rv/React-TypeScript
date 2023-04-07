import { useReducer } from 'react'
import { TodoState } from '../interfaces/interfaces'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'

const initialState: TodoState = {
    todoCount: 2,
    todos: [{
        id: 'ABC123',
        desc: 'Recolectar las piedras del infinito ',
        completed: false
    },
    {
        id: 'DEF456',
        desc: 'Recolectar las piedras del alma ',
        completed: false
    }
],
    completed: 0,
    pending: 2
}


interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children}: props) => {
    
    const [todoState, dispatch] = useReducer(todoReducer, initialState)
    
    const toggleTodo = ( id: string ) => {
        dispatch({ type: "toggleTodo", payload: {id}})
    }

    return (
        <TodoContext.Provider value={{ todoState, toggleTodo }}>
            { children }
        </TodoContext.Provider>
    )
}
