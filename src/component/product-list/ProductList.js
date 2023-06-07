import React, { useContext } from "react";
import "./ProductList.css";
import CartContext from "../../cart-context/CartContext";

const ProductList = () => {
    const {cartItems, addToCart}= useContext(CartContext)
  

    

  return (
    <section class="product-list" >
  <div class="product-container">
    <h2 class="product-heading">Product List</h2>
  
      <div class="product-details">
        <label class="product-label">Medicine Name</label>
        <label class="product-label">Description</label>
        <label class="product-label">Price</label>   <label class="product-label">Quantity</label>
      </div>
    {cartItems.map((product)=>(
    <div class="product-item" key={product._id}>
      <div class="product-details">
        <span class="product-info">{product.medicineName}</span>
        <span class="product-info">{product.description}</span>
        <span class="product-info">{product.price}</span>
      </div>
      <div class="quantity">
     
        <input type="number" min="1" value="1" class="quantity-input" />
      </div>
      <button class="btn add-to-cart-btn" onClick={()=>{addToCart(product)}}>Add to Cart</button>
    </div>))}
  </div>
</section>

  );
};
export default ProductList;
