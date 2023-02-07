import { Tab, Table } from 'semantic-ui-react'
import TaskBody from './TaskBody';
import TaskFooter from './TaskFooter';
import TaskHeader from './TaskHeader';
const Task = ({ aspects }) => {
    //console.log(aspects);
    return (
        <Tab.Pane>
            <Table textAlign='center' celled definition>
                <TaskHeader />
                <TaskBody aspects={aspects}></TaskBody>
                <TaskFooter />
            </Table>
        </Tab.Pane >
    )
}

export default Task