import styled from "styled-components"
import { TodoListContainer } from '../styles/Container.styled'
import TodoItem from "./TodoItem"

const TodoList = ({ todos, done, setDone, selected, setSelected}) => {
    return (
        <TodoListContainer>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} done={done} setDone={setDone} selected={selected} setSelected={setSelected}/>) }
        </TodoListContainer>
    )
}

export default TodoList
