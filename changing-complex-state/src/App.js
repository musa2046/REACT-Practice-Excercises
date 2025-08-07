import { useState } from "react";
import "./styles.css";

export default function App() {
  let [color, setColor] = useState();
  function handleMouseOver() {
    setColor({ backgroundColor: "black" });
  }

  function handleMouseOut() {
    setColor({ backgroundColor: "white" });
  }

  // let [firstName , setFirstName] = useState("");
  // function handleChange1(event){
  //   setFirstName(event.target.value)
  //   console.log("trigered");
  // }

  // let [lastName, setLastName] = useState("");
  // function handleChange2(event){
  //   setLastName(event.target.value)
  // }
  let [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    let { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  let [heading, setHeading] = useState("")
  function handleClick(event){
    setHeading(fullName.fName + " " + fullName.lName)
    event.preventDefault();
  }
  return (
    <div className="App">
      {/* <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1> */}
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleChange}
          value={fullName.fName}
          type="text"
          placeholder="What's your first name?"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={fullName.lName}
          type="text"
          placeholder="What's your last name?"
        />

        <button
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
