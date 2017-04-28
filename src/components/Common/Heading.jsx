import React from 'react'
import HtmlElement from './HtmlElement'

export default ({ priority = 3, ...props }) => {
  return (
    <HtmlElement element={`h${priority}`} {...props} />
  )
}
