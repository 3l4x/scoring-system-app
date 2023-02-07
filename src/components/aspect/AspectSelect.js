import React from 'react'
import { Select } from 'semantic-ui-react'
const AspectSelect = ({values}) => {
  return (
    <Select placeholder='' options={Object.keys(values).map((k)=>{
      return {key: k, value: k, text: values[k]}
    })} />
  )
}

export default AspectSelect