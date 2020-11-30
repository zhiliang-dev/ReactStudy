import React, { Component } from 'react';
import RouteData from '../../router/routerData';
import { Switch, Route } from 'react-router-dom';

class UserLayout extends Component {
  constructor(props) {
    super(props);
    console.log("UserLayout", props);
  }
  render() {
    return (
      <div>
        <Switch>
          {RouteData.map((item, index) => {
            return (<Route
              path={item.path}
              component={item.component}
              exact={item.exact}
              key={index}
            />);
          })}
        </Switch>
      </div>
    );
  }
}

export default UserLayout;
