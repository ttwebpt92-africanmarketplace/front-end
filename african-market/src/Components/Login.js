import React, { useState } from "react";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const LoginContainer = styled.div`
  padding: 2rem;
  border: darkgray 3px solid;
  border-radius: 20px;
  margin: 1rem auto;
`;

function Login(props) {

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    // console.log('login e.target: ', e.target.name);
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    axios
    .post('https://african-marketplace-ttwebpt-92.herokuapp.com/api/login', loginData)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard')

    })
    .catch((err) => {
      console.log(err);
    })

  };

  return (
    <LoginContainer>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={onChange}
            value={loginData.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={loginData.password}
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </LoginContainer>
  );
}

export default Login;
