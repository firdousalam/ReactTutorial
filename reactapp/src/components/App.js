
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {
  const contacts = [
    {
      id : 1,
      name : "firdous",
      email : "xyz@gmail.com"
    }, {
      id : 2,
      name : "firdous alam",
      email : "xyz@gmail.com"
    }, {
      id : 3,
      name : "Zuni",
      email : "xyz@gmail.com"
    }, {
      id : 4,
      name : "Yusra",
      email : "yusra@gmail.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>


    </div>
  );
}

export default App;
