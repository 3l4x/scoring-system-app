import React from 'react'
import { Table } from 'semantic-ui-react'
import TaskBtnGroup from './button/TaskBtnGroup'
import TaskNavigatorBtn from './button/TaskNavigatorBtn'
const TaskFooter = ({ panes, setErrors, resultsState: {results, saveResults}, tempResultsState: { setTempResults },  activeIndexState: { activeIndex, setActiveIndex },  }) => {
    return (
        <Table.Footer fullWidth >
            <Table.Row>
                <Table.HeaderCell colSpan='4' >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <TaskNavigatorBtn
                            content='Previous task'
                            direction='left'
                            disabled={activeIndex === 0}
                            callback={() => setActiveIndex(Math.max(activeIndex - 1, 0))}
                        />
                        <TaskBtnGroup
                        onCancel={()=>{
                            setErrors({});
                            setTempResults(results)
                        }}
                        onSave={saveResults} />
                        <TaskNavigatorBtn
                            content='Next task'
                            direction='right'
                            disabled={activeIndex === panes.length - 1}
                            callback={() => setActiveIndex(Math.min(activeIndex + 1, panes.length - 1))}
                        />
                    </div>
                </Table.HeaderCell >
            </ Table.Row>
        </Table.Footer>
    )
}

export default TaskFooter