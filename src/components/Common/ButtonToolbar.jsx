import React from 'react'
import classnames from 'classnames'
import Div from './Div'

export default ({ className, role = 'toolbar', ...props }) => {

  const divClassName = classnames('btn-toolbar', className)

  return (
    <Div className={divClassName} role={role} {...props} />
  )
}
