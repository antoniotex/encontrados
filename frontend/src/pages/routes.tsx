import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home';
import { isAuthenticated } from '../store/auth/token.service'
import Post from './Post';
import Layout from '../layout';

const PrivateRoute = ({ component: Component, route, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" component={Post} />
      <PrivateRoute exact path="/noworjs" component={<div></div>} />
    </Switch>
  </Router>
);

export default Routes;
