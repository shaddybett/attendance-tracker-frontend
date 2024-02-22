import React, { useState } from "react";

const Adminprofile = () => {
    const [name] = useState('');
    const [email] = useState('');
    const [phonenumber] = useState('');

    return (
        <div>
            <h1 style={{ fontWeight: 'bold' }}>Admin Profile</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phonenumber: {phonenumber}</p>
        </div>
    );
};

export default Adminprofile;
