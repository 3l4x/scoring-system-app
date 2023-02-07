import React from 'react'
import { Table } from 'semantic-ui-react'
const TaskHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Aspect</Table.HeaderCell>
                <Table.HeaderCell>Score / Maximum score</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

export default TaskHeader