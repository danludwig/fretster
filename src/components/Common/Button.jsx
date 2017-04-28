import React from 'react'
import classnames from 'classnames'
import HtmlElement from './HtmlElement'

export default ({ className, context, size, ...props }) => {

  const buttonClassName = classnames('btn', {
      [`btn-${context}`]: !!context,
      [`btn-${size}`]: !!size
    },
    className
  )

  const nextProps = {
    ...props,
    type: props.type || 'button',
    className: buttonClassName,
  }

  return (
    <HtmlElement element="button" {...nextProps} />
  )
}
