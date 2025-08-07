import { useState } from "react";
import "./styles.css";

export default function App() {
  
  let [count, setCount] = useState(0);
  
  function increase(){
    setCount(++count);
    console.log(count);
  }
  function decrease(){
    setCount(--count);
    console.log(count);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>
    </div>
  );
}
