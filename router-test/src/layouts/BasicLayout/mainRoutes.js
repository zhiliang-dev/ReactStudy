import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import router from '../../router';

class mainRoutes extends Component {
  return() {
    return (
      <Switch>
        {router.map(item => {
          return <Route
            key={item}
            path={item.path}
            component={item.component}
            exact={item.exact} />;
        })}
        <Redirect from='/' to='login' />
      </Switch>
    );
  }

};

export default mainRoutes;
