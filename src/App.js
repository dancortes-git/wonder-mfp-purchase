import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pur',
});

export default ({ history, isSignedIn, onSignIn }) => {

  console.log('Rendering purchase...', 'isSignedIn:', isSignedIn);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            {isSignedIn && <Redirect to="/" />}
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            {isSignedIn && <Redirect to="/" />}
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
