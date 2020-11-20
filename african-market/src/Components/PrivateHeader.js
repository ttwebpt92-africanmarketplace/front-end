import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logout from './Logout';

const HeaderBar = styled.div`
  background-color: #393d3f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 1rem 1rem 0;
`;
const SiteTitle = styled.h1`
  color: white;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
`;
const LinkItem = styled.li`
  color: white;
  cursor: pointer;
  weight: 400;
  padding: 1rem;
  &:hover {
    color: white;
  }
`;
function PrivateHeader() {
  return (
    <Router forceRefresh={true}>
      <HeaderBar>
        <SiteTitle>African Marketplace</SiteTitle>
        <nav>
          <Nav>
            <LinkItem as={Link} to="/">
              Home
            </LinkItem>
            <LinkItem as={Link} to="/login" class="headerLink">
              Login
            </LinkItem>
            <LinkItem>
            <Logout />
            </LinkItem>
            
          </Nav>
        </nav>
      </HeaderBar>
    </Router>
  );
}

export default PrivateHeader;