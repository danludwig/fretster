import React from 'react'
import * as TRIADS from '../../constants/triads'
import * as scales from '../../functions/scales'
import * as triads from '../../functions/triads'
import Grid from '../Common/Grid'
import Heading from '../Common/Heading'
import NoteName from '../Notes/NoteName'
import Div from '../Common/Div'
import Span from '../Common/Span'

const TriadsGridRow = ({ rootNoteId, scaleTypeId }) => {

  const scaleTriads = triads.buildTriads(rootNoteId, scaleTypeId)

  return (
    <Grid.Row>
      { scaleTriads.map(x =>
        <Grid.Column col="sm" py={1}
          key={`triad_root_${x.rootNote.id}`}>

          <Div>
            <Heading priority={3}>
              <NoteName note={x.rootNote} />
              { x.triadType.suffix }
            </Heading>
          </Div>
          <Div>
            { x.notes.map(n =>
              <Span d="inline-block" rounded="circle"
                className="bg-inverse text-white text-center" p={0}
                mr={1} mb={1} py={0}
                style={{width: '24px',height:'24px'}}
                key={`triad_note_${n.id}`}>
                <NoteName note={n} />
              </Span>
            )}
          </Div>
        </Grid.Column>
      )}
    </Grid.Row>
  )
}

export default TriadsGridRow
