import React from 'react'
import { Table } from 'semantic-ui-react'
import AspectInput from './AspectInput'
import AspectRadioBtn from './AspectRadioBtn'
import AspectSelect from './AspectSelect'
const Aspect = ({ index, aspect }) => {

  const lookupTable = {
    number: () => {
      return <AspectInput maxValue={aspect.maxValue}></AspectInput>
    },
    boolean: () => {
      return <AspectRadioBtn value={aspect.value}></AspectRadioBtn>
    },
    list: () => {
      return <AspectSelect values={aspect.values}></AspectSelect>
    },
  }

  return (
    <Table.Row>
      <Table.Cell>{index}</Table.Cell>
      <Table.Cell>{aspect.name}</Table.Cell>
      <Table.Cell>
        {lookupTable[aspect.type]()}
      </Table.Cell>
      <Table.Cell>{aspect.description ?? 'empty'}</Table.Cell>
    </Table.Row>
  )
}

export default Aspect