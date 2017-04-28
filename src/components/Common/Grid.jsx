import React from 'react'
import classnames from 'classnames'
import Div from './Div'
import GridRow from './GridRow'
import GridColumn from './GridColumn'

const Grid = ({ fluid, className, ...props }) => {
  const gridClassName = `container${!fluid ? '' : '-fluid'}`
  const divClassName = classnames(gridClassName, className)
  return (
    <Div className={divClassName} {...props} />
  )
}

Grid.Row = GridRow
Grid.Column = GridColumn

export default Grid
