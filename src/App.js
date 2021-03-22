import PropTypes from "prop-types";
import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from "react-redux";
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar/AppBar';
import MyLoader from './components/Loader';

const HomePage = lazy(() =>
  import('./views/StartView/StartView.js' /*webpackChunkName: 'home-page' */),
);
const Register = lazy(() =>
  import(
    './views/RegisterView/RegisterView.js' /*webpackChunkName: 'register' */
  ),
);
const Login = lazy(() =>
  import('./views/LoginView/LoginView.js' /*webpackChunkName: 'Login' */),
);

const PhoneBook = lazy(() =>
  import(
    './views/PhoneBookView/PhoneBookView.js' /*webpackChunkName: 'phone-book' */
  ),
);

class App extends Component {
  static propTypes = {
    onGetCurrentUser: PropTypes.func,
  };

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
      <AppBar />
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhoneBook}
            />
          </Switch>
        </Suspense>
    </>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);