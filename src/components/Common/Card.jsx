import React from 'react'
import classnames from 'classnames'
import Div from './Div'
import CardBlock from './CardBlock'
import CardTitle from './CardTitle'

const Card = ({ className, ...props }) => {
  const divClassName = classnames('card', className)
  return (
    <Div className={divClassName} {...props} />
  )
}

Card.Block = CardBlock
Card.Title = CardTitle

export default Card
