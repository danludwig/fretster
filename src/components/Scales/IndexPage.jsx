import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as scaleActions from '../../redux/actions/scales'
import RootNoteButton from './RootNoteButton'
import RootNotesMenu from './RootNotesMenu'
import Button from '../Common/Button'
import ButtonToolbar from '../Common/ButtonToolbar'
import Heading from '../Common/Heading'
import Grid from '../Common/Grid'

const mapStateToProps = ({ scales }) => (scales)
const mapDispatchToProps = dispatch =>
  bindActionCreators(scaleActions, dispatch)

class ScalesIndexPage extends Component {

  render() {
    const { rootNoteId, isRootNotesMenuOpen, changeScaleRoot,
      toggleRootNotesMenu, hideRootNotesMenu } = this.props
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
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScalesIndexPage)