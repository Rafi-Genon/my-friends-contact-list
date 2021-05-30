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
        <div className="contact-items m-5 row" >
            <div className="col-md-6 col-sm-12 col-lg-6">
                <p className="contact-name">{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
                {
                    isClicked === false
                        ? <button className='btn btn-primary mx-3' onClick={() => { setIsClicked(!isClicked) }}>Update</button>
                        : <EditContact id={id} submitUpdate={submitUpdate} />
                }
                <button className='btn btn-danger' onClick={() => { dispatch(deleteContact(id)) }}>Remove</button>
            </div>
        </div>
    );
};

export default Contacts;