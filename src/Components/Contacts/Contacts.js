import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../Redux/actions/actions';
import EditContact from '../EditContact/EditContact';
import './Contact.css'

const Contacts = ({ contact }) => {
    const { name, email, phone, id } = contact
    const dispatch = useDispatch()
    const isUpdate = useSelector((state) => state.contact.isUpdate)

    const [isClicked, setIsClicked] = useState(false)
    const submitUpdate = () => {
        setIsClicked(false)
    }
    return (
        <div className="contact-items" >
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            {/* <Link to={`/edit/${id}`}><button>Update</button></Link> */}

            {/* <button onClick={() => { setIsClicked(!isClicked) }}>Update2</button> */}
            {
                isClicked === false
                    // isUpdate === false
                    ? <button onClick={() => { setIsClicked(!isClicked) }}>Update</button>
                    : <EditContact id={id} submitUpdate={submitUpdate} />
            }
            <button onClick={() => { dispatch(deleteContact(id)) }}>Remove</button>
        </div>
    );
};

export default Contacts;