import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/actions/actions';

const Contacts = ({ contact }) => {
    const { name, email, phone, id } = contact
    const dispatch = useDispatch()
    
    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <button onClick={()=>{dispatch(deleteContact(id))}}>Remove</button>
        </div>
    );
};

export default Contacts;