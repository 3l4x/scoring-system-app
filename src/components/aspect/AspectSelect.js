import React from 'react'
import { Select } from 'semantic-ui-react'
import ErrorLabel from './ErrorLabel';
const AspectSelect = ({ aspectId, errors, values, tempResultsState: { tempResults, setTempResults } }) => {
  return (
    <div>
      <Select
        placeholder=''
        options={Object.keys(values).map((k) => {
          return { key: k, value: k, text: values[k] }
        })}
        value={tempResults.results[aspectId] ?? ''}
        onChange={(e, data) => {
          setTempResults({
            results: {
              ...tempResults.results,
              [aspectId]: data.value
            }
          });
        }}
        error={aspectId in errors}
      />
      <ErrorLabel id={aspectId} errors={errors} pointing={'above'} />
    </div>
  )

}

export default AspectSelect