import React, { Component } from 'react';
import IndexRouter from '../../router';
// import MainRouter from './mainRoutes';

class BasicLayout extends Component {
  render() {
    return (
      <div>
        <IndexRouter />
      </div>
    );
  }
}

export default BasicLayout;
