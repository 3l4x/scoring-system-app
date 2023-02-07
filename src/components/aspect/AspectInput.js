import React from 'react'
import { Input } from 'semantic-ui-react'
const AspectInput = ({maxValue}) => {
  return (
    <Input style={{ width: '50px' }}
    label={`/ ${maxValue} `}
    labelPosition='right'
    placeholder='0'
    required="yes"
  />
  )
}

export default AspectInput