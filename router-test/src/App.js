import './App.css';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UserLayout} />
        <Route exact path='/' component={BasicLayout} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
