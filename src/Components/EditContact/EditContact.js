import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { updateContact, getContact } from '../../Redux/actions/actions'
const EditContact = ({ id, submitUpdate }) => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    // const { id } = useParams()
    const contact = useSelector((state) => state.contact.contact)

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);

    console.log('naeme afer contact', name);
    const onUpdateContact = () => {
        const updatedContact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email,
        });
        dispatch(updateContact(updatedContact))
        submitUpdate()
    }


    return (
        <div>
            {/* <div classNamw="form-group"> */}
                {/* <label for="exampleInputEmail1">Email address</label> */}
                {/* <input type="email" className="form-control" id="exampleInputEmail1" ariaDescribedby="emailHelp" placeholder="Enter email" /> */}
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            {/* </div> */}
            <input type="text" className="form-control" value={name} placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
            <input type="text" className="form-control" value={phone} placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} />
            <input type="text" className="form-control" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <button className="btn btn-success" onClick={() => { onUpdateContact() }}>submit</button>
        </div>
    );
};

export default EditContact;