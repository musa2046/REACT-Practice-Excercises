import { useState } from "react";
import "./styles.css";

export default function App() {

const [contact , setContact] = useState({
  fName : "",
  lName : "",
  email: "",
})

function handleChange(event){
  let {value , name } = event.target;
  setContact(preValue => {
  return {
      ...preValue,
      [name] : value
   }
  })

}



// function handleChange(event){
//   let {value , name } = event.target;
//   setContact(preValue => {
//     if(name === "fName"){
//       return {
//         fName : value,
//         lName : preValue.lName,
//         email : preValue.email
//       };
//     } else if(name === "lName"){
//       return {
//         fName : preValue.fName,
//         lName : value,
//         email : preValue.email
//      };
//     }else if (name === "email"){
//       return{
//         fName : preValue.fName,
//         lName : preValue.lName,
//         email : value
//       };
//     }
//   })

// }


return (
  <div className="App" >
    <h1>Hello {contact.fName} {contact.lName}</h1>
    <p>{contact.email
    }</p>
    <form >
      <input type="text" name="fName" value={contact.fName} placeholder="What's your first name" onChange={handleChange}/>
      <input type="text" name="lName" value={contact.lName} placeholder="What's your last name" onChange={handleChange} />
      <input type="email" name="email" value={contact.email} placeholder="What's your email"  onChange={handleChange}/>
      <button>Submit</button>
    </form>
  </div>
);
}




