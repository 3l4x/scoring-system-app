import React, { useEffect, useState } from 'react'
import { Radio } from 'semantic-ui-react'
const AspectRadioBtn = ({ aspectId, value, tempResultsState: { tempResults, setTempResults } }) => {
  const [checked, setChecked] = useState(  );

  useEffect((()=>{ setChecked(tempResults.results[aspectId] ?? (value > 0))}),[tempResults,aspectId, value]);
  return (
    <Radio
      slider
      checked={checked}
      onChange={(e) => {
        setChecked(!checked);
        setTempResults({
          results: {
            ...tempResults.results,
            [aspectId]: !checked
          }
        });
      }}
    />
  )
}

export default AspectRadioBtn