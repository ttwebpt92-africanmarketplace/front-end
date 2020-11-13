import React, { useState } from 'react'
import { Form, FormGroup, Label, Input,Button } from 'reactstrap'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'


const SignForm = () => {

	const userObj = {
		username: '',
		password: '',
		email: '',
		firstname: '',
		lastname: '',
		address: '',
		role: true
	}

	const [user, setUser] = useState(userObj);



	return (
		<>
		<Form>
			<FormGroup>
				<Label for="userName">Username</Label>
					<Input
					type="text"
					name="usrName"
					id="userName"
					placeholder="please enter your username"
					value={user.username}
					required
					/>
			</FormGroup>
			<FormGroup>
				<Label for="userPassword">Password</Label>
					<Input
					type="password"
					name="email"
					id="userPassword"
					placeholder="please enter your password"
					value={user.password}
					required
					/>
			</FormGroup>
			<FormGroup>
				<Label for="userEmail">Email</Label>
					<Input
					type="email"
					name="email"
					id="userEmail"
					placeholder="please enter your email"
					value={user.email}
					required
					/>
			</FormGroup>
			<FormGroup>
				<Label for="firstName">First Name</Label>
					<Input
					type="text"
					name="first_name"
					id="firstName"
					placeholder="please enter your First name"
					value={user.firstname}
					/>
			</FormGroup>
			<FormGroup>
				<Label for="lastName">Last Name</Label>
					<Input
					type="text"
					name="last_name"
					id="lastName"
					placeholder="please enter your Last Name"
					value={user.lastname}
					/>
			</FormGroup>
			<FormGroup>
				<Label for="address">Address</Label>
					<Input
					type="text"
					name="user_address"
					id="address"
					placeholder="please enter your address"
					value={user.address}
					/>
			</FormGroup>
			<FormGroup check>
				<Input
				type="checkbox"
				name="check"
				id="exampleCheck"
				value={user.role}
				/>
        		<Label for="exampleCheck" check>
				Check this box if you are the buyer
				</Label>
      		</FormGroup>
				<Button>Submit</Button>
		</Form>
		</>
	)
}


const SignFormPage = () => {
	return (
		<>
		<PublicHeader />
		<SignForm />
		<PublicFooter />
		</>
	)
}

export default SignFormPage;