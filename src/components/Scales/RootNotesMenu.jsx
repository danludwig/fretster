import React from 'react'
import classnames from 'classnames'
import { ROOT_NOTES } from '../../constants/scales'
import * as notes from '../../functions/notes'
import Div from '../Common/Div'
import ButtonGroup from '../Common/ButtonGroup'
import Button from '../Common/Button'
import Collapse from '../Common/Collapse'
import Card from '../Common/Card'
import NoteName from '../Notes/NoteName'

const RootNotesMenu = ({ id, show, rootNoteId, onNoteChange, onHide }) => {

  return (
    <Collapse id={id} show={show}>
      <Card d="inline-block" mt={3}>
        <Card.Block p={3}>
          { notes.selectDistinctEnharmonicIds(ROOT_NOTES).map((x) =>
            <RootEnharmonicNoteGroup enharmonicId={x}
              onClick={onNoteChange}
              rootNoteId={rootNoteId}
              key={`root_note_item_${x}`} />
          )}
          <Div mt={2}>
            <Button context="secondary" onClick={() => onHide()}>
              Done
            </Button>
          </Div>
        </Card.Block>
      </Card>
    </Collapse>
  )
}

const RootEnharmonicNoteGroup = ({ enharmonicId, ...props }) => {
  const enharmonicNotes = notes.selectNotesByEnharmonicId(
    ROOT_NOTES, enharmonicId)
  if (enharmonicNotes.length === 1) {
    return (
      <RootNoteButton note={enharmonicNotes[0]} { ...props } />
    )
  }
  return (
    <ButtonGroup>
      { enharmonicNotes.map(x =>
        <RootNoteButton note={x} { ...props }
          key={`root_enharmonic_member_${x.id}`} />
      )}
    </ButtonGroup>
  )
}

const RootNoteButton = ({ note, onClick, rootNoteId }) => {
  const enharmonicNotes = notes.selectNotesByEnharmonicId(ROOT_NOTES, note)
  const isLastButtonInGroup = enharmonicNotes.length == 1
    // when there is only 1 note in the enharmonic group,
    // return true if this is the note across all groups
    ? note !== ROOT_NOTES[ROOT_NOTES.length - 1]
    // otherwise, when there is more than 1 note in the enharmonic group,
    // return true if this is the last note in the enharmonoc group
    : note === enharmonicNotes[enharmonicNotes.length - 1]

  const disabled = rootNoteId == note.id
  const context = disabled ? 'success' : 'primary'
  const mr = isLastButtonInGroup ? 2 : undefined
  const buttonProps = {
    disabled, context, mr, mt: 1,
    onClick: () => onClick(note.id)
  }

  return (
    <Button {...buttonProps}>
      <NoteName note={note} />
    </Button>
  )
}

export default RootNotesMenu
