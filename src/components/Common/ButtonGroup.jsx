import React from 'react'
import classnames from 'classnames'
import Div from './Div'

export default ({ className, role = 'group', ...props }) => {

  const divClassName = classnames('btn-group', className)

  return (
    <Div className={divClassName} role={role} {...props} />
  )
}