import React from "react";
import styled from "styled-components";
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
const Link = styled.li`
  color: white;
  cursor: pointer;
  weight: 400;
  padding: 0 1rem;
`;
function PublicHeader() {
  return (
    <HeaderBar>
      <SiteTitle>African Marketplace</SiteTitle>
      <nav>
        <Nav>
          <Link>Home</Link>
          <Link>Login</Link>
        </Nav>
      </nav>
    </HeaderBar>
  );
}

export default PublicHeader;
