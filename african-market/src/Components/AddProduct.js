import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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

  console.log('AddProduct props; ', props);
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


  const onSubmit = (e) => {
    e.preventDefault();
    console.log('newItem: ', {newItem});
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
       props.setItemData([...props.itemData,
        newItem])
      })
    
      .catch((error) => {
        console.log("cannot add item: ", error);
      });
  };



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
        <Button>Submit</Button>
      </Form>
    </>
  );
};
const AddCompPage = (props) => {
  console.log('addcomppage props: ', props);
  return (
    <>
      <AddContainer>
        <AddComp itemData={props.itemData} setItemData={props.setItemData}/>
      </AddContainer>
    </>
  );
};
export default AddCompPage;