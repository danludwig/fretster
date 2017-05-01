import React from 'react'
import classnames from 'classnames'
import Div from './Div'

const GridColumn = ({ className, col, ...props }) => {
  const colClassName = col && col !== true ? `col-${col}` : 'col'
  const divClassName = classnames(colClassName, className)
  return (
    <Div className={divClassName} {...props} />
  )
}

export default GridColumn
