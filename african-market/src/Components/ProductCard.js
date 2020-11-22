import React, { useContext } from "react";
import ItemContext from "../Contexts/ItemContext";
import { Button } from "reactstrap";

import styled from "styled-components";

const ProductCardDiv = styled.div`
  display: flex;
  margin: 1.5rem auto;
  justify-content: space-between;
  width: 35vw;
  background-color: #d6d6d6;
  border: black solid 3px;
  border-radius: 20px;

`;
const TextDetailsDiv = styled.div`
  margin-left: 0.5rem;
`;

const ProdName = styled.h4`
  text-align: left;
  font-weight: 500;
  color: black;
  font-size: 1.3rem;
`;
const ProdCat = styled.p`
  color: gray;
  margin: 0;
`;
const ProdPrice = styled.p`
  color: darkGreen;
  font-weight: 600;
  margin: 0;
  line-height: 0;
`;
const ProdImg = styled.img`

  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;`;
const ProdImgDiv = styled.div`
  border: solid black;
  margin: 0.5rem;
  width: 200px;
  height:200px;
  border-radius: 20px;
`;

const ProductsContainer = styled.div`
display:flex;
width:50%;
margin:0 auto;
`

const ButtonDiv = styled.div`
display:flex;
height:70px;
align-items:center;
`

function ProductCard(props) {
  const products = useContext(ItemContext);
  //We can change the names of these props as needed. This is mostly placeholder so we can see the setup.
  console.log("Card product: ", products);
  // const { productName, productCategory, productPrice, user, location } = props;

  const deleteHandler = (id) => {
    props.deleteProduct(id);
  }
  return (
    <div>
      {products.map((product) => (
        <ProductsContainer>
        <ProductCardDiv>
          <ProdImgDiv>
            <ProdImg src={product.imageUrl} alt={product.itemName} />
          </ProdImgDiv>
          <TextDetailsDiv>
            <ProdName>{product.itemName}</ProdName>
            <ProdCat>
              <p>Details: {product.description}</p>
            </ProdCat>
            <ProdPrice>
              <p>${product.itemPrice}</p>
            </ProdPrice>
          </TextDetailsDiv>
          <ButtonDiv>
          <Button onClick={() => deleteHandler(product.id)}>Delete</Button>
          </ButtonDiv>
        </ProductCardDiv>
        </ProductsContainer>
      ))}
    </div>
  );
}
export default ProductCard;
