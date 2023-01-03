import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    } else {
      history.push('/');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />

          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={'/auth'}>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path={'/dashboard'}>
                {!isSignedIn && <Redirect />}
                <DashboardLazy />
              </Route>
              <Route path={'/'} component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
}
