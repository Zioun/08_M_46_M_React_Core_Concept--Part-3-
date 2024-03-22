import React, { useState } from 'react';

const StateFullForm = () => {
    const [name, setName] = useState('MD. ');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if(password.length < 8){
            setError("Password must be 8 characters or longer");
        }else{
            setError(":)");
            console.log(name, email, password);
        }
        
    }
    const nameChenge = (e) =>{
        setName(e.target.value);
        console.log(e.target.value)
    }
    const emailChenge = (e) =>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const passwordChenge = (e) =>{
        setPassword(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>Password : {password}</h3>
            {error && <p>{error}</p>}
            <form onSubmit={submit}>
                <input value={name} type="text" onChange={nameChenge} name='name'/><br />
                <input type="email" onChange={emailChenge} name='email' /><br />
                <input type="password" onChange={passwordChenge} name='password' /><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default StateFullForm;