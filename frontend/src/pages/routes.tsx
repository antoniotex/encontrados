import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import { isAuthenticated } from '../store/auth/token.service'

const PrivateRoute = ({ component: Component, route, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          // Redireciona pra home e passa o estado para o app nao ficar perdido
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
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
