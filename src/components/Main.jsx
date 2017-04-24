import React, { Component, PropTypes } from 'react';

import {
  Router,
  browserHistory,
} from 'react-router'

import { routes } from './routes';

import { Provider } from 'react-redux';


class Main extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Router key={ Math.random() } history={ browserHistory }>
          { routes }
        </Router>
      </Provider>
    );
  }
}

export default Main;



