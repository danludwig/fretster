import React, { Component } from 'react';
import NeckSvg from './NeckSvg'

class FirstPage extends Component {
  render() {
    return (<div>
      <h1>Example heading <span className="tag tag-primary">Badge</span></h1>
      <button type="button" className="btn btn-primary">Primary</button>
        <div className="alert alert-info" role="alert">
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </div>
      {/*
        */}
      <NeckSvg />
    </div>)
  }
}

export default FirstPage;
{/*
  return (<svg width="490mm" height="44mm">
    <svg width="490mm" height="490mm">
    <g transform="rotate(270, 166.297, 0) translate(0, -166.297)">
      <svg>
        <NeckSvg />
      </svg>
    </g>
    </svg>
  </svg>)
*/}