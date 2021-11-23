import React from 'react'

import { SelectedTaskContainer } from '../styles/Container.styled'
import { CheckedButton } from '../styles/Button.styled'

function SelectedTask() {
    return (
        <SelectedTaskContainer>
        <h2>
            Titre de la tâche sélectionnée</h2>
            <CheckedButton>Marqué comme terminé</CheckedButton>
        
        </SelectedTaskContainer>
    )
}

export default SelectedTask
