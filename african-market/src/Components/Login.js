import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function Login() {
  const initialState = {
    credentials: {
      username: "",
      password: "",
    },
  };
  const [loginData, setLoginData] = useState(initialState);
  const onChange = (e) => {
    console.log("login e.target: ", e.target.name);
    setLoginData({
      credentials: {
        ...loginData.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    axiosWithAuth()
      .post("/api/login", loginData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form onChange={onSubmit}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input id="username" name="username" onChange={onChange} />
        <FormFeedback invalid>
          We do not have record of this email address on file.
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
        <FormFeedback invalid>
          This password does not match what is on file.
        </FormFeedback>
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
}
export default Login;
