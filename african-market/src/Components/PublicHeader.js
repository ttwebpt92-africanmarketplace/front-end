import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const HeaderBar = styled.div`
  background-color: #393d3f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
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
  padding: 0 1rem;
`;
function PublicHeader() {
  return (
    <Router>
      <HeaderBar>
        <SiteTitle>African Marketplace</SiteTitle>
        <nav>
          <Nav>
            <LinkItem>
              <Link to="/">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/login">Login</Link>
            </LinkItem>
          </Nav>
        </nav>
      </HeaderBar>
    </Router>
  );
}

export default PublicHeader;
