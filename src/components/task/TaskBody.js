import React from 'react'
import { Table } from 'semantic-ui-react'
import Aspect from '../aspect/Aspect'
const TaskBody = ({aspects}) => {
    return (
        <Table.Body>
            {aspects.map((aspect,index)=>{
                return <Aspect  index={index+1} key={index} aspect={aspect}></Aspect>
            })}
        </Table.Body>

    )
}

export default TaskBody