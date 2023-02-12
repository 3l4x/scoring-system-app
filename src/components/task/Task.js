import { Tab, Table } from 'semantic-ui-react'
import TaskBody from './TaskBody';
import TaskFooter from './TaskFooter';
import TaskHeader from './TaskHeader';
const Task = ({ panes, aspects, errorsState, tempResultsState, resultsState, activeIndexState }) => {
    //console.log(aspects);
    return (
        <Tab.Pane>
            <Table textAlign='center' celled definition>
                <TaskHeader />
                <TaskBody errors={errorsState.errors} tempResultsState={tempResultsState} aspects={aspects}></TaskBody>
                <TaskFooter
                    panes={panes}
                    tempResultsState={tempResultsState}
                    resultsState={resultsState}
                    activeIndexState={activeIndexState}
                    setErrors = {errorsState.setErrors}
                />
            </Table>
        </Tab.Pane >
    )
}

export default Task