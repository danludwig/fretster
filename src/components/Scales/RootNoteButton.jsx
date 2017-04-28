import React from 'react'
import { ROOT_NOTES } from '../../constants/scales'
import Button from '../Common/Button'
import Heading from '../Common/Heading'
import NoteName from '../Notes/NoteName'

export default ({ rootNoteId, onClick }) => {
  const rootNote = ROOT_NOTES.find(x => x.id === rootNoteId)
  return (
    <Button context="secondary" mr={3} onClick={() => onClick()}>
      <Heading priority={1} mb={0}>
        <NoteName note={rootNote} />
      </Heading>
    </Button>
  )
}
