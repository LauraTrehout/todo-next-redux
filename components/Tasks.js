import React from 'react'
import { TasksContainer } from '../styles/Container.styled'

import Done from './Done'
import Todo from './Todo'

function Tasks() {
    return (
        <TasksContainer>
            <Todo />
            <Done />
        </TasksContainer>
    )
}

export default Tasks
