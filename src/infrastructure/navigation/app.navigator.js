import { Switch, Route } from 'react-router-dom';

import { HomeScreen } from '../../features/home/screens/home.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

export const AppNavigator = () => (
  <Switch>
    <Route path="/" exact component={HomeScreen} />
    <Route path="/login" exact component={LoginScreen} />
    <Route path="/register" exact component={RegisterScreen} />
  </Switch>
);
