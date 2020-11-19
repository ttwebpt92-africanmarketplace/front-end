//Visible to users only after they are logged in.
import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ItemContext from "../Contexts/ItemContext";
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
  const username = localStorage.getItem('userID');
  console.log('username from localStorage: ', username);

  const [itemData, setItemData] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("/api/items")
      .then((res) => {
        console.log("Dashboard res: ", res.data);
        setItemData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserInfo = () => {
const id = localStorage.getItem('userID')

    axiosWithAuth()
    .get(`/api/users/${id}`)
    .then((res) => {
      console.log('getUserInfo res: ', res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getUserInfo();
    getData();
    
  }, []);


  return (
    <ItemContext.Provider value={itemData}>
    <DashboardDiv>
      <p>Welcome to your Dashboard {username}!</p>
      {/* NewProductForm Component */}
      {/* We'll need to .map the array of objects into the ProductCard */}
      <ProductCard />
    </DashboardDiv>
  </ItemContext.Provider>

  );
}

export default Dashboard;
