import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { StyledLink } from './AppBar/AppBar.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>

      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
