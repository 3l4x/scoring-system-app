import React, { useState } from 'react'
import { Radio } from 'semantic-ui-react'
const AspectRadioBtn = ({ aspectId, value, tempResultsState: { tempResults, setTempResults } }) => {
  const [checked, setChecked] = useState(value > 0);
  return (
    <Radio
      toggle checked={checked}
      onChange={(e) => {
        setChecked(!checked);
        setTempResults({
          results: {
            ...tempResults.results,
            [aspectId]: checked
          }
        });
      }}
    />
  )
}

export default AspectRadioBtn