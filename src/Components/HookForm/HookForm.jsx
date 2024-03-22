import React from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
    // const [name, handelNameChange] = useInputState('Rojoni');
    const emailState = useInputState('rojoni@gmail.com')
    const submit = (e) => {
        e.preventDefault();
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={submit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name='name'/><br /> */}
                <input {...emailState} type="email" name='email' /><br />
                <input type="password" name='password' /><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookForm;