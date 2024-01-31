import {useContext} from 'react';
import Item from './Components/Item';
import Cart from './Components/Cart';
import './App.css';
import Counter from './Components/Counter';
import { CounterContext } from './Context/Counter';
function App() {

  const counterState=useContext(CounterContext);

  console.log("Context", counterState);
  return (
    <div className="App">
     {/* <h1>Count is {counterState.count}</h1> */}
     {/* <Counter/>
     <Counter/>
     <Counter/>
     <Counter/> */}
     <Item name="Macbook Pro" price={100000}/>
     <Item name="Pendrive" price={4000}/>
     <Item name="Mobile" price={30000}/>
     <Cart/>
    </div>
  );
}

export default App;
