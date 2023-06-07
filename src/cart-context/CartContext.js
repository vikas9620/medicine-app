import React from "react";

const CartContext = React.createContext({
 
  cartItems: [],
  addItem: (item) => {},
  removeItems: (item) => {},
addToCart: (cart) => {},
orderItems: [],
  fetchData: (item) => {},
});

export default CartContext;
