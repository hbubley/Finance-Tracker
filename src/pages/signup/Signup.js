import React, { useState } from 'react';
import styles from "./Signup.module.css"

const Signup = () => {
    const [registrationObj, setRegistrationObj] = useState({ email: "", password: "", confirm_password: "" })
    const handleFormInputChange = (e) => {
        setRegistrationObj({ ...registrationObj, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(registrationObj.password === registrationObj.confirm_password)
        console.log(registrationObj)
    }
    return (<form className={styles.signup_form}>
        <h2>Register</h2>
        <label>
            <span>email:</span>
            <input name="email" value={registrationObj.email} onChange={handleFormInputChange} type="email" />
        </label>
        <label>
            <span>password:</span>
            <input name="password" value={registrationObj.password} onChange={handleFormInputChange} type="password" />
        </label>
        <label>
            <span>confirm password:</span>
            <input name="password" value={registrationObj.password} onChange={handleFormInputChange} type="password" />
        </label>
        <button className="btn" onClick={handleSubmit}>Register</button>
    </form>);
};

export default Signup;
