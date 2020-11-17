import React, { useState } from 'react'
import { Form, FormGroup, Label, Input,Button } from 'reactstrap'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import styled from 'styled-components'

const PageStyle = styled.div`
	width: 40%;
	max-width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	text-align:center;
	font-weight:bold;
	background-color: #c6c6c6;
	padding:3.68%;
	margin:0 auto;
`




const SignForm = () => {

	const userObj = {
		username: '',
		password: '',
		email: '',
		firstname: '',
		lastname: '',
		address: '',
		role: false
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
		<PageStyle>
			<SignForm />
		</PageStyle>
		<PublicFooter />
		</>
	)
}

export default SignFormPage;