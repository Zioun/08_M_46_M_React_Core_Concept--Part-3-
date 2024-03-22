import React, { useEffect, useRef } from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const submit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)

    }
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    return (
        <div>
            <form onSubmit={submit}>
                <input ref={nameRef} defaultValue={"MD. "} type="text" name='name'/><br />
                <input ref={emailRef} type="email" name='email' /><br />
                <input ref={passRef} type="password" name='password' /><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefForm;