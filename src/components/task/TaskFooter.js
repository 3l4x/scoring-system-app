import React from 'react'
import { Table, Button } from 'semantic-ui-react'
const TaskFooter = () => {
    return (
        <Table.Footer fullWidth >
            <Table.Row>
                <Table.HeaderCell colSpan='4' >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Button content='Previous task' icon='left arrow' labelPosition='left' primary />
                        <Button.Group>
                            <Button>Cancel</Button>
                            <Button.Or />
                            <Button positive>Save</Button>
                        </Button.Group>
                        <Button content='Next task' icon='right arrow' labelPosition='right' primary />

                    </div>
                </Table.HeaderCell >
            </ Table.Row>
        </Table.Footer>
    )
}

export default TaskFooter