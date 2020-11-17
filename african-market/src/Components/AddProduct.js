import React, { useState } from 'react'
import { Form, FormGroup, Label, Input,Button } from 'reactstrap'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import styled from 'styled-components'

const AddDiv = styled.div`
width: 40%;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
font-weight:bold;
background-color: #c6c6c6;
padding:9.3%;
margin:0 auto;
* {
	width:100%;
}
`

const AddComp = () => {

	const newItemObj = {
		title: '',
		price: 0,
		description: ''
	}

	const [newItem, setNewItem] = useState(newItemObj);


	return (
		<>
		<Form>
			<FormGroup>
				<Label for="itemTitle">Title</Label>
					<Input
					type="text"
					name="item_title"
					id="itemTitle"
					placeholder="please enter product title"
					value={newItem.title}
					required
					/>
			</FormGroup>
			<FormGroup>
				<Label for="itemPrice">Price $</Label>
					<Input
					type="number"
					name="item_price"
					id="itemPrice"
					placeholder="price"
					value={newItem.price}
					required
					/>
			</FormGroup>
			<FormGroup>
      		 	<Label for="itemDescription">Description</Label>
					<Input
					type="textarea"
					name="item_description"
					id="itemDescription"
					placeholder='tell about this item'
					value={newItem.description}
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
		<PublicHeader />
		<AddDiv>
			<AddComp/>
		</AddDiv>
		<PublicFooter />
		</>
	)

}

export default AddCompPage;