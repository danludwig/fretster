import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav></nav>
        <div className="flex-grow">
          { this.props.children }
        </div>
        <footer className="mt-4">
          <div className="container-fluid py-3">
            footer
          </div>
        </footer>
      </div>
    )
  }
}

export default App
