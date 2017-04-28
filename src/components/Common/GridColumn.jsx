import React from 'react'
import classnames from 'classnames'
import Div from './Div'

const GridColumn = ({ className, ...props }) => {
  const divClassName = classnames('col', className)
  return (
    <Div className={divClassName} {...props} />
  )
}

export default GridColumn
