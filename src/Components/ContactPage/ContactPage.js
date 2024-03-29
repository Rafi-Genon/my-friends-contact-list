import React from 'react';
import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import shortid from 'shortid';
import { addText } from '../../Redux/actions/actions';
import Contacts from '../Contacts/Contacts';

const ContactPage = () => {
    let history = useHistory()
    const stttate = useSelector((state) => state)
    const contactList = stttate.contact.allContacts;

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
        <div>
            <h2 style={{color: 'blue'}}>Your contact list- {contactList.length}</h2>

            <h3>add new contact</h3>
            <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} />
            <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <button onClick={() => { submitData() }}>submit</button>

            {
                contactList.map(contact => <Contacts contact={contact} key={contact.id}></Contacts>)
            }
        </div>
    );
};

export default ContactPage;