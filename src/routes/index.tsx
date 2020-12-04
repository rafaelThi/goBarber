import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/Signin/index';
import Signup from '../pages/Signup/index';

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
