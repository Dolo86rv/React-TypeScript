
import { useTodos } from '../hooks/useTodos'

export const Title = () => {
    
    const { pendingTodos } = useTodos()

    return (
        <>
            Todos: {pendingTodos}
        </>
    )
}
