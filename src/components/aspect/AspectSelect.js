import React from 'react'
import { Select } from 'semantic-ui-react'
const AspectSelect = ({ aspectId, values, tempResultsState: { tempResults, setTempResults } }) => {
  return (
    <Select
      placeholder=''
      options={Object.keys(values).map((k) => {
        return { key: k, value: k, text: values[k] }
      })}
      defaultValue={tempResults.results[aspectId]}
      onChange={(e,data) => {
        setTempResults({
          results: {
            ...tempResults.results,
            [aspectId]: data.value
          }
        });
      }}
    />
  )
}

export default AspectSelect