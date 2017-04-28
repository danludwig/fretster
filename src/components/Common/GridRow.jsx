import React from 'react'
import classnames from 'classnames'
import Div from './Div'

const GridRow = ({ className, ...props }) => {
  const divClassName = classnames('row', className)
  return (
    <Div className={divClassName} {...props} />
  )
}

export default GridRow
