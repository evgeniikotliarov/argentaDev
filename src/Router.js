import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LogIn from './components/log-in/LogIn';
import NotFound from './components/not-found/NotFound';
import Wrapper from "./components/hoc/Wrapper";
import MainPage from "./components/pages/MainPage";
import PrivateRoute from "./components/util/PrivateRoute";

const history = createBrowserHistory();

class AppRouter extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Wrapper>
          <Switch>
            <Route exact path="/log-in" component={ LogIn } />
            <Wrapper>
              <PrivateRoute exact path="/" component={ MainPage }/>
            </Wrapper>
            <Route path="*" component={ NotFound } />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export const useHistory = history;
export default AppRouter;
