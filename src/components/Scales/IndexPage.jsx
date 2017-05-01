import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as scaleActions from '../../redux/actions/scales'
import * as scales from '../../functions/scales'
import RootNoteButton from './RootNoteButton'
import RootNotesMenu from './RootNotesMenu'
import ScaleTypesMenu from './ScaleTypesMenu'
import NoteName from '../Notes/NoteName'
import Grid from '../Common/Grid'
import Button from '../Common/Button'
import ButtonToolbar from '../Common/ButtonToolbar'
import Heading from '../Common/Heading'
import Card from '../Common/Card'
import Div from '../Common/Div'

const mapStateToProps = ({ scales }) => (scales)
const mapDispatchToProps = dispatch =>
  bindActionCreators(scaleActions, dispatch)

class ScalesIndexPage extends Component {

  render() {

    const { rootNoteId, isRootNotesMenuOpen, changeScaleRoot,
      toggleRootNotesMenu, hideRootNotesMenu,
      scaleTypeId, isScaleTypesMenuOpen, changeScaleType,
      toggleScaleTypesMenu, hideScaleTypesMenu
    } = this.props

    const scaleNotes = scales.buildScale(rootNoteId, scaleTypeId)

    return (
      <Grid fluid>
        <Grid.Row>
          <Grid.Column>

            <ButtonToolbar mt={3}>
              <RootNoteButton rootNoteId={rootNoteId}
                onClick={toggleRootNotesMenu} />
              <Button context="secondary" onClick={() => toggleScaleTypesMenu()}>
                <Heading priority={1} mb={0}>
                  { scaleTypeId }
                </Heading>
              </Button>
            </ButtonToolbar>

            <RootNotesMenu
              show={isRootNotesMenuOpen}
              rootNoteId={rootNoteId}
              onHide={hideRootNotesMenu}
              onNoteChange={changeScaleRoot}
            />

            <ScaleTypesMenu
              show={isScaleTypesMenuOpen}
              scaleTypeId={scaleTypeId}
              onHide={hideScaleTypesMenu}
              onScaleChange={changeScaleType}
            />

          </Grid.Column>
        </Grid.Row>
        <Grid.Row mt={3}>
          <Grid.Column>
            <Heading priority={2}>
              Scale Notes
            </Heading>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          { scaleNotes.map(x =>
            <Grid.Column col="sm" py={1}
              key={`scale_note_${x.interval.halfStepsFromRoot}`}>
              <Div rounded="circle" p={2} d="inline-block" className="bg-success text-white"
                style={{width: '50px', height: '50px'}}>
                <Heading priority={3} mb={0} style={{lineHeight: '1.15'}} className="text-center">
                  <NoteName note={x.note} />
                </Heading>
              </Div>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScalesIndexPage)