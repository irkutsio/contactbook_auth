import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/registration"> Registration </StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/contacts"> Contacts</StyledLink>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
