import React, { useState } from 'react';
import styles from "./Signup.module.css"

const Signup = () => {
    const [registrationObj, setRegistrationObj] = useState({ email: "", username: "", password: "", confirm_password: "" });
    const [alert, setAlert] = useState(null)
    const handleFormInputChange = (e) => {
        setRegistrationObj({ ...registrationObj, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registrationObj.password === registrationObj.confirm_password) {

            console.log(registrationObj)
        } else {
            setAlert("Passwords must match!")
            setTimeout(() => setAlert(null), 3000)
        }
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
            <label>
                <span>confirm password:</span>
                <input name="confirm_password" value={registrationObj.confirm_password} onChange={handleFormInputChange} type="password" />
            </label>
            <button className="btn" onClick={handleSubmit}>Signup</button>
        </form>
    );
};

export default Signup;
