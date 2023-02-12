import React from 'react'
import { Button } from 'semantic-ui-react'
const TaskBtnGroup = ({ onCancel, onSave }) => {
    return (

        <Button.Group>
            <Button
                onClick={onCancel}
                title={'Resetting form data to last saved output'}
            >
                Cancel
            </Button>

            <Button.Or />

            <Button
                onClick={onSave}
                positive
            >
                Save
            </Button>
        </Button.Group>
    )
}

export default TaskBtnGroup