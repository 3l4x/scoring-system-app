import React from 'react'
import { Button } from 'semantic-ui-react'
function TaskBtnGroup() {
    return (

        <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Button positive>Save</Button>
        </Button.Group>
    )
}

export default TaskBtnGroup