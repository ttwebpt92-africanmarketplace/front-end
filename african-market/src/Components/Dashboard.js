//Visible to users only after they are logged in.
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ItemContext from "../Contexts/ItemContext";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import styled from "styled-components";
import { Collapse } from "reactstrap";

import PrivateHeader from './PrivateHeader';

const DashboardDiv = styled.div`
  margin: 0;
`;
const H3 = styled.h3`
  text-align: center;
  margin: 1rem auto;
`;
const NewItemButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #003300;
  color: white;
  border: none;
  border-radius: 2rem;
  padding: 0.5rem;
  width: 10rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
  //for the collapsable "Add Product" component:
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const deleteProduct = (id) => {
      const newProduct = [...itemData];
      const deleteIndex = newProduct.findIndex((product) => product.id === id);
      newProduct.splice(deleteIndex, 1);
      setItemData(newProduct);

    }
  

  return (
    <div>
      <div>
        <PrivateHeader />
      </div>
      <ItemContext.Provider value={itemData}>
      <DashboardDiv>
        <H3>Welcome to your Dashboard {username}!</H3>
        <NewItemButton onClick={toggle}>Add A New Listing</NewItemButton>
        <Collapse isOpen={isOpen}>
          <AddProduct itemData={itemData} setItemData={setItemData} />
        </Collapse>
        <ProductCard deleteProduct={deleteProduct}/>
      </DashboardDiv>
    </ItemContext.Provider>
    </div>

  );
}

export default Dashboard;
