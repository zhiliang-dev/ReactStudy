import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RouteData from './routerData';

function Index() {
  return <Switch>
    {RouteData.map((item, index) => {
      return (<Route
        path={item.path}
        component={item.component}
        exact={item.exact}
        key={index}
      />);
    })}
    <Redirect from='/' to='/auth/login' />
  </Switch>;
}


export default Index;
