import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import Task from './task/Task';
/*
    Input styles in different css}

*/
const ScoringSystem = ({ data,results,setResults }) => {
    //Github pages is a static web hosting so I cannot save results into json file
    //The results are gonna be saved into results state object
    const [tempResults, setTempResults] = useState({ results: {} });

    const saveResults = () => {
        setResults(tempResults);
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexProp = { activeIndex, setActiveIndex }
    const panes = data.tasks.map((task) => {
        return {
            menuItem: task.name,
            render: () =>
                <Task
                    panes={panes}
                    activeIndexProp={activeIndexProp}
                    tempResultsState={{ tempResults, setTempResults }}
                    resultsState={{ results, saveResults }}
                    aspects={task.aspects}>
                </Task>
        };
    })

    return (
        <Tab
            activeIndex={activeIndex}
            onTabChange={(e, data) => {
                setActiveIndex(data.activeIndex);
            }}
            panes={panes} />
    )

}

export default ScoringSystem