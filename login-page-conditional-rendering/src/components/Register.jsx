import Input from "./Input";
import {changePage} from "./App"

export default function Register() {
  return (
    <form action="" className="form">
      <Input required type="text" placeholder="username" />
      <Input required type="password" placeholder="Password" />
      <Input required type="password" placeholder="Confirm Password" />
      <button type="submit" onClick={changePage}>Register</button>
      
    </form>
  );
}
