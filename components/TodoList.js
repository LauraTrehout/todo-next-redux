import styled from "styled-components"
import { TodoListContainer } from '../styles/Container.styled'
import TodoItem from "./TodoItem"

const TodoList = ({ todos }) => {
    return (
        <TodoListContainer>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />) }
        </TodoListContainer>
    )
}

export default TodoList
