import React from 'react'
import classnames from 'classnames'
import Div from './Div'
import CardBlock from './CardBlock'

export Block from './CardBlock'

const Card = ({ className, ...props }) => {
  const divClassName = classnames('card', className)
  return (
    <Div className={divClassName} {...props} />
  )
}

Card.Block = CardBlock

export default Card
