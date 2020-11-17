//Visible to users only after they are logged in.
import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const DashboardDiv = styled.div`
  background-color: gray;
`;
function Dashboard() {
  return (
    <DashboardDiv>
      <p>Welcome to your Dashboard {username}!</p>
      {/* NewProductForm Component */}
      {/* We'll need to .map the array of objects into the ProductCard */}
      {ProductCard}
    </DashboardDiv>
  );
}

export default Dashboard;
