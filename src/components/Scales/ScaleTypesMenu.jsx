import React from 'react'
import * as SCALES from '../../constants/scales'
import Collapse from '../Common/Collapse'
import Card from '../Common/Card'
import Heading from '../Common/Heading'
import Button from '../Common/Button'

const ScaleTypesMenu = ({ id, show, scaleTypeId, onScaleChange, onHide }) => {

  return (
    <Collapse id={id} show={show}>
      <Card d="inline-block" mt={1} rounded={0}>
        <Card.Block p={3}>
          <Card.Title>
            <Heading priority={6} d="inline-block" mr={2}>
              Select scale type
            </Heading>
            <Button context="secondary" onClick={() => onHide()} size="sm">
              Done
            </Button>
          </Card.Title>
          { SCALES.TYPES.map((x) =>
            <ScaleTypeButton scaleType={x}
              scaleTypeId={scaleTypeId}
              onClick={onScaleChange}
              key={`scale_type_${x.id}`} />
          )}
        </Card.Block>
      </Card>
    </Collapse>
  )
}

const ScaleTypeButton = ({ scaleTypeId, scaleType, onClick }) => {
  const isLastScaleType = scaleType === SCALES.TYPES[SCALES.TYPES.length - 1]
  const isSelectedScaleType = scaleTypeId == scaleType.id
  const disabled = isSelectedScaleType
  const className = isSelectedScaleType ? 'active' : undefined
  const context = "primary"
  const mr = isLastScaleType ? undefined : 2
  const buttonProps = {
    disabled, context, mr, mt: 1, className,
    onClick: () => onClick(scaleType.id)
  }
  return (
    <Button {...buttonProps}>
      { scaleType.id }
    </Button>
  )
}

export default ScaleTypesMenu
