import React, { useEffect, useState } from 'react'
import { Radio } from 'semantic-ui-react'
import ErrorLabel from './ErrorLabel';
const AspectRadioBtn = ({ aspectId, errors, value, tempResultsState: { tempResults, setTempResults } }) => {
  const [checked, setChecked] = useState();
  useEffect((() => { setChecked(tempResults.results[aspectId] ?? (value > 0)) }), [tempResults, aspectId, value]);
  return (
    <div>
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
      <ErrorLabel id={aspectId} errors={errors} pointing={'above'}/>
    </div>
  )
}

export default AspectRadioBtn