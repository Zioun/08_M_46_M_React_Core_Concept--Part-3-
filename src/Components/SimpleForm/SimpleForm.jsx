import React from 'react';

const SimpleForm = () => {
    const sumbit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        
    }
    return (
        <div>
            <form onSubmit={sumbit}>
                <input type="text" name='name'/><br />
                <input type="email" name='email' /><br />
                <input type="number" name='number' /><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;