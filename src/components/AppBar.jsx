// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import authSelectors from 'redux/auth/auth-selectors';

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)


  return (
    <header style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Navigation />
      {isLoggedIn ?  <UserMenu /> : <AuthNav/>}
    </header>
  );
};
