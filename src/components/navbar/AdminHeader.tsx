import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
`;

const AdminHeader = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/admin/produtos">Produtos</NavLink>
        <NavLink to="/admin/feiras">Feiras</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default AdminHeader;
