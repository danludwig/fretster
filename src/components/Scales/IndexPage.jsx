import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTonic, changeScale } from '../../redux/actions/scales'
import { SCALE_TONICS, ENHARMONIC_IDS } from '../../constants/notes'
import TonicNoteButton from './TonicNoteButton'

const mapStateToProps = ({ scales }) => {
  return {
    tonicNoteId: scales.tonicNoteId,
    scale: scales.scale,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTonic: tonicNoteId => {
      return dispatch(changeTonic(tonicNoteId))
    },
    changeScale: scale => {
      return dispatch(changeScale(scale))
    },
  }
}

class ScalesIndexPage extends Component {
  render() {
    const tonicNote = SCALE_TONICS.find(x => x.id === this.props.tonicNoteId)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">

            <div className="btn-toolbar mt-3" role="toolbar">
              <div className="btn-group mr-2" role="group" aria-label="Scale note">
                <button type="button" className="btn btn-secondary"
                   data-toggle="collapse" data-target="#collapseExample"
                   aria-expanded="false" aria-controls="collapseExample">
                  <h1 className="mb-0">
                    { `${tonicNote.letter}` }
                    <sup>
                      { `${tonicNote.accidentals.join('')}` }
                    </sup>
                  </h1>
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Scale type">
                <button type="button" className="btn btn-secondary">
                  <h1 className="mb-0">Major</h1>
                </button>
              </div>
            </div>

            <div className="collapse show" id="collapseExample">
              <div className="mt-2 card d-inline-block">
                <div className="card-block p-3">
                  { ENHARMONIC_IDS.map((x) =>
                    <TonicNoteButton enharmonicId={x}
                      onClick={this.props.changeTonic}
                      key={`tonic_note_item_${x}`} />
                  )}

                </div>
              </div>
            </div>



          </div>
        </div>


        {/*
          <div className="row">
            <div className="col">
              1 of 2
            </div>
            <div className="col">
              1 of 2
            </div>
          </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col">
            1 of 3
          </div>
          <div className="col">
            1 of 3
          </div>
        </div>
        */}


      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScalesIndexPage)