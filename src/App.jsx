import './App.scss';
import { Product } from './components/Product/Product';

const App = () => (
  <div>
    <h1>My Shop</h1>
    <Product
      title="Pepperoni Pizza"
      price={100}
    />
    <Product
      title="Chocolate Cake"
      price={30}
    />
    <Product
      title="Water"
      price={0}
    />
  </div>
);

export default App;
