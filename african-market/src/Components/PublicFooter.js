import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #393d3f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
`;
const TeammateIcon = styled.img`
  border: solid 1.5px white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

function PublicFooter() {
  return (
    <FooterDiv>
      <a href="https://github.com/jekegren01">
        <TeammateIcon
          src="https://ca.slack-edge.com/ESZCHB482-W012H6TJR0D-973b95126a17-512"
          alt="headshot of Jacob Ekegren"
        />
      </a>
      <a href="https://github.com/sdkramer">
        <TeammateIcon
          src="https://ca.slack-edge.com/ESZCHB482-W0123RSLTPH-72d18f2062ba-512"
          alt="headshot of Sean Kramer"
        />
      </a>
      <a href="https://github.com/milklot">
        <TeammateIcon
          src="https://ca.slack-edge.com/ESZCHB482-W0198A2R03C-1a3fa3bd213a-512"
          alt="headshot of Illia Miklashevych"
        />
      </a>
      <a href="https://github.com/devandapaige">
        <TeammateIcon
          src="https://ca.slack-edge.com/ESZCHB482-W017LTC9AJ1-b9b561137c43-512"
          alt="headshot of Amanda Nelson"
        />
      </a>
    </FooterDiv>
  );
}

export default PublicFooter;
