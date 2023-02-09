import { Tab, Table } from 'semantic-ui-react'
import TaskBody from './TaskBody';
import TaskFooter from './TaskFooter';
import TaskHeader from './TaskHeader';
const Task = ({ panes, activeIndexProp, aspects, tempResultsState, resultsState, }) => {
    //console.log(aspects);
    return (
        <Tab.Pane>
            <Table textAlign='center' celled definition>
                <TaskHeader />
                <TaskBody tempResultsState={tempResultsState} aspects={aspects}></TaskBody>
                <TaskFooter
                    panes={panes}
                    tempResultsState={tempResultsState}
                    resultsState={resultsState}
                    activeIndexProp={activeIndexProp}
                />
            </Table>
        </Tab.Pane >
    )
}

export default Task