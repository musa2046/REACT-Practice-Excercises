import { useState } from "react";
import "./styles.css";

export default function App() {
  // let [heading, setHeading] = useState("Hello");
  // function handleClick() {
  //   setHeading("Submitted");
  // }
  let [color, setColor] = useState({ backgroundColor: "white" });
  function handleMouseOver() {
    setColor({ backgroundColor: "black" });
  }

  function handleMouseOut() {
    setColor({ backgroundColor: "white" });
  }
  const [name, updateName] = useState("");

  function handleChange(event) {
    updateName(event.target.value);
  }
  let [heading, newHeading] = useState("");
  function handleClick(event) {
    newHeading(name);
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Hello {heading} </h1>
      <form onSubmit={handleClick} >
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          onClick={handleClick}
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          style={color}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
