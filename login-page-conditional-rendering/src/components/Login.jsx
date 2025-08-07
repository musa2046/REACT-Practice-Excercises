import Input from "./Input";
// let isRegisterd = true
export default function Login() {
  return (
    <form action="" className="form">
      <Input type= "text" placeholder= "username"/>
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      
    </form>
  )
      {/* <form action="" className="form">
      <Input type= "text" placeholder= "username"/>
      <Input type="password" placeholder="Password" />
      {!isRegisterd && <Input type="password" placeholder="Confirm Password" /> }
      <button type = "submit"> {isRegisterd ? "Login" : "Register"} </button>
      </form> */}
  
}
