
import React, { useState, useContext } from "react";
import CartContext from "../../cart-context/CartContext";



const Cart = () => {
const {orderItems} = useContext(CartContext)
  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const totalAmount = orderItems.reduce((acc, item) => {
    return acc + item.price
  }, 0);


  return (
    <React.Fragment>
      <button  onClick={handleShow}>
        cart <span>{orderItems.length}</span>
      </button>

      {show && (
        <section >
          <h2>CART</h2>
          <button conClick={handleClose}>
            X
          </button>
          <div >
            <span >ITEM</span>
            <span >PRICE</span>
            <span >QUANTITY</span>
          </div>
          {orderItems.map((element) => (
            <section class="cart">
        <div class="cart-items">
          <div class="cart-item">
            <span>{element.medicineName}</span>
            <span>{element.price}</span>
          </div>
        </div>
  
      </section>
          ))}
          <div >
            <span >Total ${totalAmount}</span>
            <button >Checkout</button>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Cart;
