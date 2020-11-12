import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

function Login() {
    const onChange = () => {

    }
    const onSubmit = () => {

    }

    return (
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input id="username" onChange={onChange} />
          <FormFeedback invalid>
            We do not have record of this email address on file.
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" onChange={onChange} />
          <FormFeedback invalid>
           This password does not match what is on file.
          </FormFeedback>
        </FormGroup>
        <Button onChange={onSubmit} >Login</Button>
      </Form>
    );
}

export default Login;