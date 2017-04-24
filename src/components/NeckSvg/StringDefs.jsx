import React from 'react'
import StringWindingPattern from './StringWindingPattern'

export default ({ id = 'string_defs', strings, ...props }) => {

  return (
    <defs id={id}>
      { strings.filter(x => x.windingWidth).map(string =>
        <StringWindingPattern string={string} {...props} />
      )}
    </defs>
  )
}
