import React from 'react'
import { Tab, Input, Table, Button } from 'semantic-ui-react'


/*
    Input styles in different css}

*/
const renderTask = () => {
    return (
        <Tab.Pane>
            <Table textAlign='center' celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Criteria</Table.HeaderCell>
                        <Table.HeaderCell>Score / Maximum score</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>Criteria 1</Table.Cell>
                        <Table.Cell>
                            <Input style={{ width: '50px' }}
                                label=' / 5'
                                labelPosition='right'
                                placeholder='0'
                            />
                        </Table.Cell>
                        <Table.Cell>Idk random test bla bla</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Criteria 2</Table.Cell>
                        <Table.Cell>
                            <Input style={{ width: '50px' }}
                                label=' / 5'
                                labelPosition='right'
                                placeholder='0'
                            />
                        </Table.Cell>
                        <Table.Cell>Idk random test bla bla</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>Criteria 3</Table.Cell>
                        <Table.Cell>
                            <Input style={{ width: '50px' }}
                                label=' / 5'
                                labelPosition='right'
                                placeholder='0'
                            />
                        </Table.Cell>
                        <Table.Cell>Idk random test bla bla</Table.Cell>
                    </Table.Row>
                </Table.Body>

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
            </Table>

        </Tab.Pane >
    );

}

const ScoringSystem = () => {

    const panes = [
        { menuItem: 'Task 1', render: () => renderTask() },
        { menuItem: 'Task 2', render: () => renderTask() },
        { menuItem: 'Task 3', render: () => renderTask() },
    ]

    return (
        <Tab panes={panes} renderActiveOnly={true} />
    )
}

export default ScoringSystem