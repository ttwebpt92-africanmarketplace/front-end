import React, { useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

import styled from "styled-components";

const ProductCardDiv = styled.div`
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  justify-content: space-around;
  align-content: right;
  width: 80vw;
  background-color: lightGray;
  border: black solid 3px;
  border-radius: 20px;
  padding: 1rem;
`;
const ProdName = styled.h4`
  text-align: left;
  font-weight: 500;
  color: black;
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

function ProductCard(props) {
  const products = useContext(ItemContext);
  //We can change the names of these props as needed. This is mostly placeholder so we can see the setup.
  console.log("Card product: ", products);
  // const { productName, productCategory, productPrice, user, location } = props;
  return (
    <div>
      {products.map((product) => (
        <ProductCardDiv>
          <ProdName>{product.itemName}</ProdName>
          <ProdCat>
            <p>Details: {product.description}</p>
          </ProdCat>
          <ProdPrice>
            <p>${product.itemPrice}</p>
          </ProdPrice>
        </ProductCardDiv>
      ))}
    </div>
  );
}
export default ProductCard;
