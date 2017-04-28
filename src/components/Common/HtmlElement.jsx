import React from 'react'
import classnames from 'classnames'
import * as bootstrap from '../../functions/bootstrap'

export default ({ element, ...props}) => {
  const HtmlElement = element
  const nextProps = bootstrap.buildUtilityClassNames(props)
  return (
    <HtmlElement {...nextProps} />
  )
}

