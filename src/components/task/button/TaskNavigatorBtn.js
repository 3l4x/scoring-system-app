import React from 'react'
import { Button } from 'semantic-ui-react'
function TaskNavigatorBtn({disabled, content, direction, callback }) {
  return (

    <Button
    content={`${content}`}
    icon={`${direction} arrow`}
    labelPosition={`${direction}`}
    secondary
    disabled={disabled}
    onClick={()=>{
        callback();
    }}
    />
  )
}

export default TaskNavigatorBtn