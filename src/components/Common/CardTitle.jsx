import React from 'react'
import classnames from 'classnames'
import HtmlElement from './HtmlElement'

export default ({ className, element = 'div', ...props }) => {
  const elementClassName = classnames('card-title', className)
  return (
    <HtmlElement element={element} className={elementClassName} {...props} />
  )
}
