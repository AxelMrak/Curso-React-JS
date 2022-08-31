
import './App.css';
import ProductsList from './components/container/ProductsList';
import Product from './components/pure/product';
import { ProductContext } from './context/productContext';

function App() {
  return (
    <div className="App">
      <ProductContext>
        <ProductsList>
          <Product></Product>
        </ProductsList>
      </ProductContext>
    </div>
  );
}

export default App;