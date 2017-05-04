import React from 'react'
import classnames from 'classnames'
import * as SCALES from '../../constants/scales'
import * as scales from '../../functions/scales'
import * as notes from '../../functions/notes'
import Div from '../Common/Div'
import Span from '../Common/Span'
import HtmlElement from '../Common/HtmlElement'
import Heading from '../Common/Heading'
import ButtonGroup from '../Common/ButtonGroup'
import Button from '../Common/Button'
import Collapse from '../Common/Collapse'
import Card from '../Common/Card'
import NoteName from '../Notes/NoteName'

const ScaleFinderMenu = ({ show, onHide, ...props }) => {

  return (
    <Collapse show={show}>
      <Card d="inline-block" mt={1} rounded={0}>
        <Card.Block p={3}>
          <Card.Title>
            <Heading priority={6} d="inline-block" mr={2}>
              Select notes to find scales that contain them
            </Heading>
            <Button context="secondary" onClick={() => onHide()} size="sm">
              Done
            </Button>
          </Card.Title>
          { notes.selectDistinctEnharmonicIds(SCALES.FINDER_NOTES).map((x) =>
            <ScaleFinderEnharmonicNoteGroup enharmonicId={x}
              { ...props }
              key={`finder_note_item_${x}`} />
          )}
          <ScaleFinderResults { ...props } />
        </Card.Block>
      </Card>
    </Collapse>
  )
}

const ScaleFinderEnharmonicNoteGroup = ({ enharmonicId, ...props }) => {
  const enharmonicNotes = notes.selectNotesByEnharmonicId(
    SCALES.FINDER_NOTES, enharmonicId)
  if (enharmonicNotes.length === 1) {
    return (
      <ScaleFinderNoteButton note={enharmonicNotes[0]} { ...props } />
    )
  }
  return (
    <ButtonGroup>
      { enharmonicNotes.map(x =>
        <ScaleFinderNoteButton note={x} { ...props }
          key={`root_enharmonic_member_${x.id}`} />
      )}
    </ButtonGroup>
  )
}

const ScaleFinderNoteButton = ({ note, selectedEnarmonicIds,
  onSelectEnharmonicId, onDeselectEnharmonicId }) => {

  const enharmonicNotes = notes.selectNotesByEnharmonicId(
    SCALES.FINDER_NOTES, note)
  const isLastButtonInGroup = enharmonicNotes.length == 1
    // when there is only 1 note in the enharmonic group,
    // return true if this is the note across all groups
    ? note !== SCALES.FINDER_NOTES[SCALES.FINDER_NOTES.length - 1]
    // otherwise, when there is more than 1 note in the enharmonic group,
    // return true if this is the last note in the enharmonic group
    : note === enharmonicNotes[enharmonicNotes.length - 1]

  const isSelectedEnharmonicId = selectedEnarmonicIds.includes(note.enharmonicId)
  const className = isSelectedEnharmonicId ? 'active' : undefined
  const context = isSelectedEnharmonicId ? 'primary' : 'info'
  const mr = isLastButtonInGroup ? 2 : undefined
  const onClick = isSelectedEnharmonicId
    ? () => onDeselectEnharmonicId(note.enharmonicId)
    : () => onSelectEnharmonicId(note.enharmonicId)
  const buttonProps = {
    context, mr, mt: 1, className, onClick,
    style: {boxShadow: 'none'}
    //disabled, context, mr, mt: 1, className,
    //onClick: () => onClick(note.id)
  }

  return (
    <Button {...buttonProps}>
      <NoteName note={note} />
    </Button>
  )
}

const ScaleFinderResults = ({ selectedEnarmonicIds, onChangeScale }) => {
  if (selectedEnarmonicIds.length === 0)
    return (
      <Div mt={2}>
        Results will appear here
      </Div>
    )

  const candidateScales = []
  for (let rootNote of SCALES.ROOT_NOTES) {
    for (let scaleType of SCALES.TYPES) {
      const scale = scales.buildScale(rootNote.id, scaleType.id)
      let scaleContainsAllSelectedEnharmonicIds = true
      for (let selectedEnarmonicId of selectedEnarmonicIds) {
        const scaleContainsThisEnharmonicId = !!scale
          .find(x => x.note.enharmonicId === selectedEnarmonicId)
        if (!scaleContainsThisEnharmonicId) {
          scaleContainsAllSelectedEnharmonicIds = false
          break
        }
      }
      if (scaleContainsAllSelectedEnharmonicIds)
        candidateScales.push({
          rootNote, scaleType, scale
        })
    }
  }

  if (candidateScales.length > 0) {
    return (
      <Div className="list-group mt-2">
        {candidateScales.map(x =>
          <button className="list-group-item list-group-item-action"
            onClick={() => onChangeScale(x.rootNote.id, x.scaleType.id)}
            key={`scale_${x.scaleType.id}_${x.rootNote.id}`}>
            <HtmlElement element="strong" mr={2}>
              <NoteName note={x.rootNote} />
              {' '}
              { x.scaleType.id }
            </HtmlElement>
            { x.scale.map(s =>
              <Div d="inline-block" ml={1} rounded="circle"
                className="bg-primary text-white text-center" p={0}
                style={{width: '32px', height: '32px', lineHeight: '32px'}}
                key={s.note.id}>
                <NoteName note={s.note} />
              </Div>
            )}
          </button>
        )}
      </Div>
    )
  }

  return (
    <Div mt={2}>
      No scales that I am aware of contain all of the notes you selected :(
    </Div>
  )
}

export default ScaleFinderMenu
