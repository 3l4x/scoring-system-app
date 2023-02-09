import React from 'react'
import { Button } from 'semantic-ui-react'
function TaskBtnGroup({ onCancel, onSave }) {
    return (

        <Button.Group>
            <Button
                onClick={onCancel}
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