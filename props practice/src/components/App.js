import "../styles.css";
import contacts from "../contacts";
import Card from "./card";


function createCard(contact){
  return <Card 
    key = {contact.id}
    id = {contact.id}
    name = {contact.name}
    img= {contact.imgURL}
    num= {contact.phone}
    email ={contact.email}
  />

}

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      
      
      
      
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        num={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        num={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        num={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}
