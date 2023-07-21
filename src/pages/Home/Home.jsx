import { useSelector } from 'react-redux';
import { HomeStyledLogIn, HomeStyledLogOut } from './Home.styled';
import authSelectors from 'redux/auth/auth-selectors';

export const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <HomeStyledLogIn><h1>Welcome to the contact book!</h1></HomeStyledLogIn>
  ) : (
    <HomeStyledLogOut>
      <h1>Welcome to the contact book! Please Register or Log In↗</h1>
    </HomeStyledLogOut>
  );
};
