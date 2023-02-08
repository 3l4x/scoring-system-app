import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import Task from './task/Task';


/*
    Input styles in different css}

*/
const ScoringSystem = ({ data }) => {
    //Github pages is a static web hosting so I cannot save results into json file T_T
    //The results are gonna be saved into results state object
    const [results, setResults] = useState({results:{}});
    const [tempResults, setTempResults] = useState({results:{}});
    const panes = data.tasks.map((task) => {
        return { menuItem: task.name, render: () => <Task tempResultsState={{tempResults, setTempResults}} aspects={task.aspects}></Task> };
    })
    return (
        <Tab panes={panes} />
    )
}

export default ScoringSystem