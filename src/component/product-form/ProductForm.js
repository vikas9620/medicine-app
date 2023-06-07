import React,{useRef, useContext} from "react";
import "./ProductForm.css";
import CartContext from "../../cart-context/CartContext";


const ProductForm = () => {
const medicineRef = useRef()
const descriptionRef = useRef()
const priceRef = useRef()
const { addItem } = useContext(CartContext);
const formSubmitHandler = (e) => {
    e.preventDefault()
const product={
    medicineName: medicineRef.current.value,
    description: descriptionRef.current.value,
    price: priceRef.current.value
}
addItem(product)
medicineRef.current.value = ''
descriptionRef.current.value = ''
priceRef.current.value = ''

}

  return (
    <section class="product">
      <h2>Product</h2>
      <form class="product-fields" onSubmit={formSubmitHandler}>
        <div>
          <label>Medicine Name</label>
          <input type="text" placeholder="Medicine Name" ref={medicineRef}/>
        </div>
        <div>
          <label>Description</label>
          <input type="text" placeholder="description" ref={descriptionRef} />
        </div>
        <div>
          <label>Price</label>
          <input type="text" placeholder="Price" ref={priceRef}/>
        </div>
        <button class="btn">Add</button>
      </form>
    </section>
  );
};
export default ProductForm;
