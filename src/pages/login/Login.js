import React, { useState } from 'react';
import styles from './Login.module.css'

const Login = () => {
    const [loginObj, setLoginObj] = useState({ email: "", password: "" })

    const handleFormInputChange = (e) => {
        setLoginObj({ ...loginObj, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginObj)
    }

    return (
        <form className={styles.login_form}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input name="email" value={loginObj.email} onChange={handleFormInputChange} type="email" />
            </label>
            <label>
                <span>password:</span>
                <input name="password" value={loginObj.password} onChange={handleFormInputChange} type="password" />
            </label>
            <button className="btn" onClick={handleSubmit}>Login</button>
        </form>
    );
};

export default Login;
