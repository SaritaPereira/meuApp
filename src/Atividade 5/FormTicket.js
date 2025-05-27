import { useState } from "react";

export default function FormTicket(){
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const fullName= firstName + ' ' + lastName;

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <div>
            <h2>Let'scheck you in</h2>
            <label>
                First Name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>Your ticket will be isued to: <b>{fullName}</b></p>
        </div>
    );
}