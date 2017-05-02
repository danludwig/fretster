import React from 'react'
import Button from '../Common/Button'
import Heading from '../Common/Heading'

export default ({ scaleTypeId, onClick }) => {
  return (
    <Button context="secondary" mr={3} onClick={() => onClick()}>
      <Heading priority={1} mb={0}>
        { scaleTypeId }
      </Heading>
    </Button>
  )
}
