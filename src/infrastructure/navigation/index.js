import { useContext } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

import { AppNavigator } from './app.navigator';
import { DashboardNavigator } from './dashboard.navigator';

import { Header } from '../../components/layout/Header';

// import { Error404Screen } from '../../features/error/screen/Error404.screen';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <Router>
      <div>
        <Header />
        {isAuthenticated ? <DashboardNavigator /> : <AppNavigator />}
        {/* <Route path="*" exact component={Error404Screen} /> */}
      </div>
    </Router>
  );
};
