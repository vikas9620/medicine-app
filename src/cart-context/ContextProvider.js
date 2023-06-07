import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
 const[order, setOrder] = useState([]);
const url='https://crudcrud.com/api/5eba5435ecbb49cc849553d5ece3269d'

  const addItemHandler = async (item) => {
    try {
      const response = await fetch(`${url}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
  
      if (response.ok) {
        console.log(item);
        if (Array.isArray(item)) {
          setCartData(item);
        } else {
          setCartData([item]);
        }
        fetchCartItems();
      } else {
        console.error('Failed to add item.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  
 const addItemToCartHandler = async (item) => {
    try {
      const response = await fetch(`${url}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
  
      if (response.ok) {
        console.log(item);
        if (Array.isArray(item)) {
          setOrder(item);
        } else {
          setOrder([item]);
        }
        
      } else {
        console.error('Failed to add item.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };


  const fetchCartItems = async () => {
    try {
      const response = await fetch(`${url}/cart`);
  
      if (response.ok) {
        const data = await response.json();
  
        if (data) {
         
          setCartData(data);
        } else {
          setCartData([]);
        }
      } else {
        console.error('Failed to retrieve cart items.');
      }
    } catch (error) {
      console.error('Error retrieving cart items:', error);
    }
  };
  

  
 const cartContext = {

    orderItems: order,
    cartItems: cartData,
    addItem: addItemHandler,
 addToCart: addItemToCartHandler,
    fetchData: fetchCartItems,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
