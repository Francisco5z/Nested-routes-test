import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';

import HomePage from './pages/Home';

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" render={HomePage} />
    </Switch>
  )
}