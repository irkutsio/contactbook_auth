import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav';
import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import authSelectors from 'redux/auth/auth-selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
