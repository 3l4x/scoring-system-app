import React, { useEffect, useState } from 'react'
import { Tab } from 'semantic-ui-react'
import { FormValidator } from '../utils/FormValidator';
import { GenerateValidationRules } from '../utils/GenerateValidationRules';
import Task from './task/Task';
import * as yup from 'yup';

/*
    Input styles in different css}

*/
const ScoringSystem = ({ data, setOutput }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    //
    const [results, setResults] = useState({ results: {} });
    const [tempResults, setTempResults] = useState({ results: {} });
    //
    const [validationRules, setValidationRules] = useState(yup.object().shape({}));
    const [errors, setErrors] = useState({});
    const [hasBeenValidated, setHasBeenValidated] = useState(false);
    useEffect(() => {
        setValidationRules(GenerateValidationRules(data));
        //console.log(GenerateValidationRules(data));
    }, [data]);

    useEffect(() => {
        setOutput(results);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results])


    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setResults(tempResults);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors])


    const saveResults = async () => {
        const validationResults = await FormValidator(validationRules, tempResults.results);
        setErrors(validationResults);
        if(!hasBeenValidated)
            setHasBeenValidated(true);
    }
    //setResults is async, so we have to update output whenever results have been updated

    const panes = data.tasks.map((task) => {
        const numOfErrors = task.aspects.reduce((acc, {id})=>{
            if(id in errors)
                return acc+1;
            return acc;
        },0)
        return {
            menuItem: task.name + `${hasBeenValidated ? ` | ${numOfErrors}❌${task.aspects.length-numOfErrors}✔️` : '' }`,
            render: () =>
                <Task
                    panes={panes}
                    activeIndexState={{ activeIndex, setActiveIndex }}
                    tempResultsState={{ tempResults, setTempResults }}
                    resultsState={{ results, saveResults }}
                    errorsState = {{errors,setErrors}}
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