import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as scaleActions from '../../redux/actions/scales'
import * as scales from '../../functions/scales'
import RootNoteButton from './RootNoteButton'
import RootNotesMenu from './RootNotesMenu'
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

    const { rootNoteId, scaleTypeId, isRootNotesMenuOpen, changeScaleRoot,
      toggleRootNotesMenu, hideRootNotesMenu } = this.props

    const scaleNotes = scales.buildScale(rootNoteId, scaleTypeId)

    return (
      <Grid fluid>
        <Grid.Row>
          <Grid.Column>

            <ButtonToolbar mt={3}>
              <RootNoteButton rootNoteId={rootNoteId}
                onClick={toggleRootNotesMenu} />
              <Button context="secondary" disabled>
                <Heading priority={1} mb={0}>
                  Major
                </Heading>
              </Button>
            </ButtonToolbar>

            <RootNotesMenu
              show={isRootNotesMenuOpen}
              rootNoteId={rootNoteId}
              onHide={hideRootNotesMenu}
              onNoteChange={changeScaleRoot}
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
          <Grid.Column col="sm" py={3}>
            <Div rounded="circle" p={4} d="inline-block" className="bg-info"
              style={{width: '75px', height: '75px'}}>
              <Heading priority={3} mb={0} style={{lineHeight: '0.85'}} className="text-center">
                C
              </Heading>
            </Div>
          </Grid.Column>
          <Grid.Column col="sm" py={3}>
            <Div rounded="circle" p={4} d="inline-block" className="bg-info"
              style={{width: '75px', height: '75px'}}>
              <Heading priority={3} mb={0} style={{lineHeight: '0.85'}} className="text-center">
                D
              </Heading>
            </Div>
          </Grid.Column>
          <Grid.Column col="sm" className="text-center" py={3}>
            E
          </Grid.Column>
          <Grid.Column col="sm" className="text-center" py={3}>
            F
          </Grid.Column>
          <Grid.Column col="sm" className="text-center" py={3}>
            G
          </Grid.Column>
          <Grid.Column col="sm" className="text-center" py={3}>
            A
          </Grid.Column>
          <Grid.Column col="sm" className="text-center" py={3}>
            B
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ol>
              { scaleNotes.map(x =>
                <li key={x.interval.halfStepsFromRoot}>
                  <NoteName note={x.note} />
                </li>
              )}
            </ol>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScalesIndexPage)