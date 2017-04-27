import React, { Component } from 'react'
import NavBar from './NavBar/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="flex-grow">
          { this.props.children }
        </div>
        <footer className="bg-inverse text-white mt-4">
          <div className="container-fluid py-3">
            sticky footer
          </div>
        </footer>
      </div>
    )
  }
}

export default App
