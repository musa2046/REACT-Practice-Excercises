import { useState } from "react";
import "../styles.css";
import Login from "./Login";
import Register from "./Register";
// function conditionallyRender(){
  //   if (isLoggedIn){
//     return <h1>Hello</h1>
//   }else{
  //     return <Login />
  //   }
  // }
  export function changePage(){
    setPage(<Login />)
  }
  export default function App() {
    // let isLoggedIn = 0
    [page, setPage] = useState(<Register />)
    let isRegisterd = 0
    return (
    <div className="container">
      {page}
     {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
     {/* {isRegisterd ? <Login /> : <Register />} */}
    </div>
  );
}
// ctrl +zw