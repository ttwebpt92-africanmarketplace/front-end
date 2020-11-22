import React, { useState } from 'react'
import { Form, FormGroup, Label, Input,Button } from 'reactstrap'
import styled from 'styled-components'
import axios from "axios"
import { useHistory } from 'react-router-dom';
import PublicHeader from "./PublicHeader"


const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  text-align: center;
  background-color: #c6c6c6;
  padding: 5.61%;
  margin: 0 auto;
`;

const SignForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    role: true,
  });

  const history = useHistory();

  const onChange = (e) => {
    //console.log('user e.target: ', e.target.name,e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post(
        "https://african-marketplace-ttwebpt-92.herokuapp.com/api/register",
        user
      )
      .then((res) => {
        console.log("post request: ", res);
        history.push("/login");
      })
      .catch((error) => {
        console.log("something went wrong: ", error);
      });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="please enter your username"
            value={user.username}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="please enter your password"
            value={user.password}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="please enter your email"
            value={user.email}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="please enter your First name"
            value={user.firstname}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="please enter your Last Name"
            value={user.lastname}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="please enter your address"
            value={user.address}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            name="check"
            id="check"
            value={user.role}
            onChange={onChange}
          />
          <Label for="check" checked>
            Check this box if you are the buyer
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};
const SignFormPage = () => {
  return (
    <>
      <PublicHeader />
      <PageStyle>
        <SignForm />
      </PageStyle>
    </>
  );
};
export default SignFormPage;
