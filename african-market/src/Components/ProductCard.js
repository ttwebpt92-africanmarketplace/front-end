import React, { useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

import styled from "styled-components";

const ProductCardDiv = styled.div`
  display: flex;
  margin: 1.5rem auto;
  flex-direction: row;
  width: 80vw;
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
height: 100%; width: 100%; object-fit: contain; border-radius: 20px;`;
const ProdImgDiv = styled.div`
  border: solid black;
  margin: 0.5rem;
  width: 25%;
  border-radius: 20px;
`;

function ProductCard(props) {
  const products = useContext(ItemContext);
  //We can change the names of these props as needed. This is mostly placeholder so we can see the setup.
  console.log("Card product: ", products);
  // const { productName, productCategory, productPrice, user, location } = props;
  return (
    <div>
      {products.map((product) => (
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
        </ProductCardDiv>
      ))}
    </div>
  );
}
export default ProductCard;
