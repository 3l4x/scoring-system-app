import React from 'react'
import { Table } from 'semantic-ui-react'
import AspectInput from './AspectInput'
import AspectRadioBtn from './AspectRadioBtn'
import AspectSelect from './AspectSelect'
const Aspect = ({ index, aspect, tempResultsState }) => {
  const lookupTable = {
    number: () => {
      return <AspectInput aspectId={aspect.id} tempResultsState={tempResultsState} maxValue={aspect.maxValue}></AspectInput>
    },
    boolean: () => {
      return <AspectRadioBtn aspectId={aspect.id}  tempResultsState={tempResultsState}   value={aspect.value}></AspectRadioBtn>
    },
    list: () => {
      return <AspectSelect aspectId={aspect.id}  tempResultsState={tempResultsState}   values={aspect.values}></AspectSelect>
    },
  }

  return (
    <Table.Row>
      <Table.Cell>{index+1}</Table.Cell>
      <Table.Cell>{aspect.name}</Table.Cell>
      <Table.Cell>
        {lookupTable[aspect.type]()}
      </Table.Cell>
      <Table.Cell>{aspect.description ?? 'empty'}</Table.Cell>
    </Table.Row>
  )
}


export default Aspect