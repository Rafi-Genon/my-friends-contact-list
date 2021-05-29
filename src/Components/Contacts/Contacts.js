import React from 'react';

const Contacts = ({ contact }) => {
    const { name, email, phone } = contact
    return (
        <div style={{border:'2px solid red', margin:'20px'}}> 
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

export default Contacts;