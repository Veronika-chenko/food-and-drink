import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const NavLink = styled(Link)`
  padding: 10px 0;
  color: red;
`;
