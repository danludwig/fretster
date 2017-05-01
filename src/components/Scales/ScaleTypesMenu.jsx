import React from 'react'
import classnames from 'classnames'
import * as SCALES from '../../constants/scales'
import Collapse from '../Common/Collapse'
import Card from '../Common/Card'
import Div from '../Common/Div'
import Button from '../Common/Button'

const ScaleTypesMenu = ({ id, show, scaleTypeId, onScaleChange, onHide }) => {

  return (
    <Collapse id={id} show={show}>
      <Card d="inline-block" mt={3}>
        <Card.Block p={3}>
          { SCALES.TYPES.map((x) =>
            <ScaleTypeButton scaleType={x}
              scaleTypeId={scaleTypeId}
              onClick={onScaleChange}
              key={`scale_type_${x.id}`} />
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

const ScaleTypeButton = ({ scaleTypeId, scaleType, onClick }) => {
  const isLastScaleType = scaleType === SCALES.TYPES[SCALES.TYPES.length - 1]
  const disabled = scaleTypeId == scaleType.id
  const context = disabled ? 'success' : 'primary'
  const mr = isLastScaleType ? undefined : 2
  const buttonProps = {
    disabled, context, mr, mt: 1,
    onClick: () => onClick(scaleType.id)
  }
  return (
    <Button {...buttonProps}>
      { scaleType.id }
    </Button>
  )
}

export default ScaleTypesMenu
