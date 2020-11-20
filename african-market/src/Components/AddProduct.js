<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
=======
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

>>>>>>> 76be358cfbfd4d89917cba0b1bb1c31e9e713848
const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  background-color: #c6c6c6;
  padding: 3.68%;
  margin: 0 auto;
  * {
    width: 100%;
  }
`;
const AddComp = (props) => {
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemPrice: "",
    description: "",
    categoryId: "",
  });
  const onChange = (e) => {
    //console.log('user e.target: ', e.target.name,e.target.value);
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('newItem: ', newItem);
    axiosWithAuth()
      .post(
        "api/items",
        newItem
      )
      .then((res) => {
        console.log("post request: ", res);
        setNewItem({
          itemName: "",
          itemPrice: "",
          description: "",
          categoryId: "",
        })
        history.push('/dashboard')
      })
    
      .catch((error) => {
        console.log("cannot add item: ", error);
      });
  };

<<<<<<< HEAD


=======
>>>>>>> 76be358cfbfd4d89917cba0b1bb1c31e9e713848
  return (
    <>
      <Form onSubmit={onSubmit} >
        <FormGroup>
          <Label for="itemName">Title</Label>
          <Input
            type="text"
            name="itemName"
            id="itemName"
            placeholder="please enter product title"
            value={newItem.itemName}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="categoryId">Select Category of item</Label>
          <CustomInput
            type="select"
            id="categoryId"
            name="categoryId"
            value={newItem.categoryId}
            onChange={onChange}
            required
          >
            <option value="">Select Category</option>
            <option value="1">fruit</option>
            <option value="2">vegetable</option>
            <option value="3">dairy</option>
            <option value="4">meat</option>
            <option value="5">seasoning</option>
            <option value="6">beverage</option>
            <option value="7">condiment</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="itemPrice">Price $</Label>
          <Input
            type="number"
            name="itemPrice"
            id="itemPrice"
            placeholder="price"
            value={newItem.itemPrice}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="tell us more about this item"
            value={newItem.description}
            onChange={onChange}
            required
          />
        </FormGroup>
        <Button forceRefresh={true}>Submit</Button>
      </Form>
    </>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 76be358cfbfd4d89917cba0b1bb1c31e9e713848
const AddCompPage = () => {
  return (
    <>
      <AddContainer>
        <AddComp />
      </AddContainer>
    </>
  );
};
export default AddCompPage;