import React from 'react';
import styles from './Login.module.css'

const Login = () => {
    return (
        <form className={styles.login_form}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input type="email" />
            </label>
            <label>
                <span>password:</span>
                <input type="password" />
            </label>
        </form>
    );
};

export default Login;
