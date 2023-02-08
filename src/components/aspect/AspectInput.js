import React from 'react'
import { Input } from 'semantic-ui-react'

const AspectInput = ({aspectId, maxValue, tempResultsState: {tempResults, setTempResults}}) => {
  return (
    <Input style={{ width: '50px' }}
    label={`/ ${maxValue} `}
    labelPosition='right'
    placeholder={`${tempResults ?? '0'}`}
    value={tempResults['results'][aspectId] ?? '0'}
    onChange={(e)=>{
      setTempResults({
        results: {
          ...tempResults.results,
          [aspectId] : e.target.value
        }
      }
      );
      console.log(tempResults);
    }}
  />
  )
}

export default AspectInput