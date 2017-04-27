import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import classnames from 'classnames'

class NavBarItem extends Component {
  render() {
    const { to, activeOnIndexOnly = false, className, children } = this.props
    const active = this.context.router.isActive(to, activeOnIndexOnly)
    const itemClassName = classnames('nav-item', {
      active
    }, className)

    return (
      <li className={itemClassName}>
        <Link to={to} className="nav-link">
          { children }
          <span className="sr-only">(current)</span>
        </Link>
      </li>
    )
  }
}

NavBarItem.contextTypes = {
  router: PropTypes.object
}

export default NavBarItem
