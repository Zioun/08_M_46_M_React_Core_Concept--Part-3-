import React from 'react';

const ReusableForm = ({formTitle, handleSubmit, formBtn = 'Submit', children}) => {
    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h3>{children}</h3>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name'/><br />
                <input type="email" name='email' /><br />
                <input type="password" name='password' /><br />
                <input type="submit" value={formBtn}/>
            </form>
        </div>
    );
};

export default ReusableForm;