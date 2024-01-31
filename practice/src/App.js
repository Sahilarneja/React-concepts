import logo from './logo.svg';
import './App.css';
import './Components/Item.js';
import Item from './Components/Item.js';
import ItemDate from './Components/ItemDate.js';

function App() {
  return (
    <>
    <Item name="Nirma"/>
    <ItemDate date="10" month="Jan" year="2000"/>
    <Item name="Surf Excel"/>
    <ItemDate date="11" month="dec" year="1996"/>
    <div className="App">
      Hello Ji
    </div>
    
    </>
  );
}

export default App;
