import './App.css';
import react, { useState } from 'react';
function App(props) {

  const [count,setCount]=useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function removeHandler(){
    setCount(0);
  }


  return (
    <>
    <div>
      <h3>Increment & Decrement</h3>
    </div>

    <div>
      <button onClick={decreaseHandler}>-</button>
    </div>
    <div>
      {count}
    </div>
    <div>
      <button onClick={incrementHandler}>+</button>
    </div>

    <div>
      <button onClick={removeHandler}>Reset</button>
    </div>
    </>
  );
}

export default App;
