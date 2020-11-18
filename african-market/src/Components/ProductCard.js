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

  const product = useContext(ItemContext);
  //We can change the names of these props as needed. This is mostly placeholder so we can see the setup.
console.log('Card product: ', product[0].itemName);

  const { productName, productCategory, productPrice, user, location } = props;
  return (
    <ProductCardDiv>
      <ProdName>{productName}{product[0].itemName}</ProdName>
      <ProdCat>{productCategory}</ProdCat>
      <ProdPrice>{productPrice}</ProdPrice>
      <ProdUser>
        Uploaded by, {user} from {location}
      </ProdUser>
      {/* Optional Edit and Delete Buttons for Stretch */}
      {/* <button>Edit</button><button>Delete</button> */}
    </ProductCardDiv>
  );
}
export default ProductCard;
