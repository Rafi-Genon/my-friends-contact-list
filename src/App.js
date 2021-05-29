import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import shortid from 'shortid';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import { addText } from './Redux/actions/actions'

function App() {
  let history = useHistory()
  const stttate = useSelector((state) => state)
  const contactList = stttate.contact.allContact;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const submitData = () => {
    const newID = {
      id: shortid.generate(),
      name: name,
      email: email,
      phone: phone
    }
    dispatch(addText(newID))
  }
  return (
    <div className="App">
      <h2>Your contact list- {contactList.length}</h2>
      {
        contactList.map(contact => <Contacts contact={contact} key={contact.id}></Contacts>)
      }
      <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
      <input type="text" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} />
      <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
      <button onClick={() => { submitData() }}>submit</button>
    </div>
  );
}

export default App;
