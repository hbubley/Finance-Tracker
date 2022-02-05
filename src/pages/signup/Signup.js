import React, { useState } from 'react';
import styles from "./Signup.module.css"

const Signup = () => {
    const [registrationObj, setRegistrationObj] = useState({ email: "", username: "", password: "" });

    const handleFormInputChange = (e) => {
        setRegistrationObj({ ...registrationObj, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(registrationObj)

    }
    return (
        <form className={styles.signup_form}>
            <h2>Signup</h2>
            {alert && <p>{alert}</p>}
            <label>
                <span>email:</span>
                <input name="email" value={registrationObj.email} onChange={handleFormInputChange} type="email" />
            </label>
            <label>
                <span>username:</span>
                <input name="username" value={registrationObj.username} onChange={handleFormInputChange} type="email" />
            </label>
            <label>
                <span>password:</span>
                <input name="password" value={registrationObj.password} onChange={handleFormInputChange} type="password" />
            </label>
            <button className="btn" onClick={handleSubmit}>Signup</button>
        </form>
    );
};

export default Signup;
