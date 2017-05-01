import React from 'react'
import NavBarItem from './Item'

export default () => {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button"
        data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>
      <a href="#" className="navbar-brand">Riffic</a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavBarItem to="/" activeOnIndexOnly>
            Home
          </NavBarItem>
          <NavBarItem to="/neck">
            FirstPage
          </NavBarItem>
          <NavBarItem to="/second">
            SecondPage
          </NavBarItem>
          <NavBarItem to="/scales">
            Scales
          </NavBarItem>
        </ul>
      </div>
    </nav>
  )
}
