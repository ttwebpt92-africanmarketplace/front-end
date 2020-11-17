import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
import styled from 'styled-components'

const AddContainer = styled.div`
width: 40%;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
font-weight:bold;
background-color: #c6c6c6;
padding:10.4%;
margin:0 auto;
* {
	width:100%;
}
`

const AddComp = () => {


	const [newItem, setNewItem] = useState({
		title: '',
		price: '',
		description: '',
		categoryId: ''
	});


	const onChange = (e) => {
		console.log('user e.target: ', e.target.name,e.target.value);
		setNewItem({
	  ...newItem,
	[e.target.name]: e.target.value,
		  
		})
	  };

	return (
		<>
		<Form>
			<FormGroup>
				<Label for="title">Title</Label>
					<Input
					type="text"
					name="title"
					id="title"
					placeholder="please enter product title"
					value={newItem.title}
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
					onChange={onChange}>
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
				<Label for="price">Price $</Label>
					<Input
					type="number"
					name="price"
					id="price"
					placeholder="price"
					value={newItem.price}
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
					placeholder='tell us more about this item'
					value={newItem.description}
					onChange={onChange}
					required
					/>
      		</FormGroup>
				<Button onClick ={console.log(newItem)}>Submit</Button>
		</Form>
		</>
	)
}

const AddCompPage = () => {
	return (
		<>
		<AddContainer>
			<AddComp/>
		</AddContainer>
		</>
	)

}

export default AddCompPage;