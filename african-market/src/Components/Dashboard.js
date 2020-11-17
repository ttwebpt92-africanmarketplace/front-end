//Visible to users only after they are logged in.
import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import AddProduct from "./AddProduct";

const DashboardDiv = styled.div`
  background-color: gray;
`;
const ProductListings = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

function Dashboard() {
  return (
    <DashboardDiv>
      <p>Welcome to your Dashboard!</p>
      <AddProduct />
      <ProductListings>
        {/* We'll need to .map the array of objects into the ProductCard */}
        {ProductCard}
      </ProductListings>
    </DashboardDiv>
  );
}

export default Dashboard;
