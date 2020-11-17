import React, { useState } from 'react'
import { Form, FormGroup, Label, Input,Button } from 'reactstrap'
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

	const [user, setUser] = useState({
		username: '',
		password: '',
		email: '',
		firstname: '',
		lastname: '',
		address: '',
		role: false
	});

	const onChange = (e) => {
		console.log('user e.target: ', e.target.name,e.target.value);
		setUser({
	  ...user,
	[e.target.name]: e.target.value,
		  
		})
	  };

	return (
		<>
		<Form>
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
	)
}


const SignFormPage = () => {
	return (
		<>
		<PageStyle>
			<SignForm />
		</PageStyle>
		</>
	)
}

export default SignFormPage;