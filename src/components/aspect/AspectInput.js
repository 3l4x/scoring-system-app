import React, { useEffect, useRef } from 'react'
import { Input } from 'semantic-ui-react'
import ErrorLabel from './ErrorLabel';

const AspectInput = ({ errors, aspectId, maxValue, tempResultsState: { tempResults, setTempResults } }) => {
  const labelRef = useRef(null);
  const errorLabelRef = useRef(null);
  useEffect(() => {
    const labelWidth = labelRef.current.clientWidth;
    labelRef.current.style.margin = `0 ${labelWidth}px 0 0`
    errorLabelRef.current.style.margin = `0 0 0 ${labelWidth}px`
  }, []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Input style={{ width: '60px' }}
        label={<div ref={labelRef} className='ui label label'>{`/ ${maxValue} `}</div>}
        labelPosition='right'
        placeholder={0}
        value={tempResults['results'][aspectId] ?? ''}
        onChange={(e) => {
          if (e.target.value === '') {
            const newTempResults = {...tempResults};
            delete newTempResults.results[aspectId]
            setTempResults(newTempResults);
          }
          else {
            setTempResults({
              results: {
                ...tempResults.results,
                [aspectId]: e.target.value
              }
            });
          }
        }}
        error={aspectId in errors}
      />
      <ErrorLabel labelRef={errorLabelRef} id={aspectId} errors={errors} />
    </div>
  )
}

export default AspectInput