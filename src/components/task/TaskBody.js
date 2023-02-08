import React from 'react'
import { Table } from 'semantic-ui-react'
import Aspect from '../aspect/Aspect'
const TaskBody = ({aspects, tempResultsState}) => {
    return (
        <Table.Body>
            {aspects.map((aspect,index)=>{
                return <Aspect tempResultsState={tempResultsState} index={index} key={index} aspect={aspect}></Aspect>
            })}
        </Table.Body>

    )
}

export default TaskBody