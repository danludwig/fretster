import React from 'react'
import classnames from 'classnames'
import Div from './Div'

export default ({ className, ...props }) => {
  const divClassName = classnames('card-block', className)
  return (
    <Div className={divClassName} {...props} />
  )
}
