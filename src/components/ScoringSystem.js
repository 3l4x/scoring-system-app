import React from 'react'
import { Tab } from 'semantic-ui-react'
import Task from './task/Task';


/*
    Input styles in different css}

*/
const ScoringSystem = ({ data }) => {

    const panes = data.tasks.map((task) => {
        return { menuItem: task.name, render: () => <Task aspects={task.aspects}></Task> };
    })
    return (
        <Tab panes={panes} />
    )
}

export default ScoringSystem