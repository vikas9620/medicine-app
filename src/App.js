
import './App.css';
import Cart from './component/cart/Cart';
import ProductForm from './component/product-form/ProductForm';
import ProductList from './component/product-list/ProductList';

function App() {
  return (
    <div class="App">
    <div class="app-container">
      
  <ProductForm></ProductForm>
    <ProductList></ProductList>
  
    <Cart></Cart>
    </div>
  </div>
  
  );
}

export default App;
