import React, { useContext } from "react";
import ItemContext from '../Contexts/ItemContext';

import styled from "styled-components";


const ProductCardDiv = styled.div`
  display: flex;
  margin: 2rem;
  flex-direction: column;
  justify-content: space-around;
  align-content: right;
  width: 80vw;
  background-color: white;
  border: black solid 3px;
  border-radius: 20px;
`;
const ProdName = styled.h3`
  font-weight: 500;
  color: black;
`;
const ProdCat = styled.p`
  color: gray;
`;
const ProdPrice = styled.p`
  color: darkgreen;
`;
const ProdUser = styled.p`
  color: black;
`;

function ProductCard(props) {

  const products = useContext(ItemContext);
  //We can change the names of these props as needed. This is mostly placeholder so we can see the setup.
console.log('Card product: ', products);

  // const { productName, productCategory, productPrice, user, location } = props;
  return (
    <div>
{products.map((product) => (
  <ProductCardDiv>
  <ProdName>{product.itemName}</ProdName>
  <ProdCat>{product.description}</ProdCat>
  <ProdPrice>{product.itemPrice}</ProdPrice>
  <ProdUser>
    Uploaded by, {product.userId} from {product.itemName}
  </ProdUser>
  {/* Optional Edit and Delete Buttons for Stretch */}
  {/* <button>Edit</button><button>Delete</button> */}
</ProductCardDiv>
))}
</div>

  );
}
export default ProductCard;
