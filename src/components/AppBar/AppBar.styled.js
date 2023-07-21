import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ebebeb;
  margin-right: 16px;

  &.active {
    color: #1976d2;
  }
`;
