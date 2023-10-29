import "./App.scss";
import goods from "./goods.json";
import { GoodList } from "./components/GoodList/GoodList";



const App = () => (
  <div className="App">
    <h1>Goods list</h1>
    <GoodList goods={goods}/>
  </div>
);

export default App;
