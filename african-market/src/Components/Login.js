
import React, { useState } from "react";
import axios from 'axios';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";


function Login() {

// const initialState = {
//     username: '',
//     password: ''
// }

const [loginData, setLoginData] = useState({
  username: '',
  password: ''
})

  const onChange = (e) => {
    // console.log('login e.target: ', e.target.name);
    setLoginData({
  ...loginData,
[e.target.name]: e.target.value,
      
    })
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    axios
    .post('https://african-marketplace-ttwebpt-92.herokuapp.com/api/login', loginData)
    .then((res) => {
      localStorage.setItem('token', res.data.token)

    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" id="username" name="username" onChange={onChange} value={loginData.username}/>
        <FormFeedback invalid>
          We do not have record of this email address on file.
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" id="password" name="password" onChange={onChange} value={loginData.password}/>
        <FormFeedback invalid>
          This password does not match what is on file.
        </FormFeedback>
      </FormGroup>
      <Button 
      
      >Login</Button>
    </Form>
  );
}

export default Login;
