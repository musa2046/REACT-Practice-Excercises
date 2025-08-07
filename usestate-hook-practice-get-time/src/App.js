import { useState } from "react";
import "./styles.css";

export default function App() {
  let now = new Date().toLocaleTimeString();
  console.log(now)
  let [time , setTime] = useState(now);
 function getTime(){
  let newTime = new Date().toLocaleTimeString() 
  setTime(newTime)
 }

//  setInterval(getTime, 1000)
 return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}
