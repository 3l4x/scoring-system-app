import React, { useState } from 'react'
import { Radio } from 'semantic-ui-react'
const AspectRadioBtn = ({value}) => {
  const [checked, setChecked] = useState(value>0);
  return (
    <Radio toggle checked={checked} onChange={()=>setChecked(!checked)}/>
  )
}

export default AspectRadioBtn