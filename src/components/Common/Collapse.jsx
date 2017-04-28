import React from 'react'
import classnames from 'classnames'
import Div from './Div'

export default ({ show, className, ...props }) => {
  const divClassName = classnames('collapse', { show }, className)
  return (
    <Div className={divClassName} {...props} />
  )
}
