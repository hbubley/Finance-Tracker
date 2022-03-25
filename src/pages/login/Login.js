import React, { useState } from 'react';
import Error from '../../components/error/Error';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css'

const Login = () => {
    const [loginObj, setLoginObj] = useState({ email: "", password: "" })
    const {login, error, isPending} = useLogin();
    const handleFormInputChange = (e) => {
        setLoginObj({ ...loginObj, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(loginObj)
    }
    const loginText = isPending ? "Submitting...": "Login"
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
            <button className="btn" onClick={handleSubmit}>{loginText}</button>
            {error && <Error error={error} />}
        </form>
    );
};

export default Login;
