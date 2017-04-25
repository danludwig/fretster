import React from 'react'
import StringRect from './StringRect'

export default ({ id = 'strings', strings, ...props }) => {

  return (
    <g id={id}>
      { strings.map(string =>
        <StringRect string={string} {...props}
          key={`string_number_${string.number}`} />
      )}
    </g>
  )
}
