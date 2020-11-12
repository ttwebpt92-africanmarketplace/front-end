import React from 'react'
import { Form, FormGroup, Label, Input,Button } from 'reactstrap'

const SignForm = () => {
	return (
		<Form>
			<FormGroup>
				<Label for="userName">Username</Label>
					<Input
					type="text"
					name="usrName"
					id="userName"
					placeholder="please enter your username"/>
			</FormGroup>
			<FormGroup>
				<Label for="userPassword">Password</Label>
					<Input
					type="password"
					name="email"
					id="userPassword"
					placeholder="please enter your password"/>
			</FormGroup>
			<FormGroup>
				<Label for="userEmail">Email</Label>
					<Input
					type="email"
					name="email"
					id="userEmail"
					placeholder="please enter your email"/>
			</FormGroup>
			<FormGroup>
				<Label for="firstName">First Name</Label>
					<Input
					type="text"
					name="first_name"
					id="firstName"
					placeholder="please enter your First name"/>
			</FormGroup>
			<FormGroup>
				<Label for="lastName">Last Name</Label>
					<Input
					type="text"
					name="last_name"
					id="lastName"
					placeholder="please enter your Last Name"/>
			</FormGroup>
			<FormGroup>
				<Label for="address">Address</Label>
					<Input
					type="text"
					name="user_address"
					id="address"
					placeholder="please enter your address"/>
			</FormGroup>
			<FormGroup>
        		<Label for="sellerSelect">Are you seller or buyer?</Label>
					<Input 
					type="select" 
					name=""
					id="sellerSelect">
          				<option>Seller</option>
          				<option>Buyer</option>
        			</Input>
      		</FormGroup>
				<Button>Submit</Button>
		</Form>
	)
}

export default SignForm;