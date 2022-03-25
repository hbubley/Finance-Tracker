import React from 'react';
import { Link } from 'react-location';
import styles from "./Navbar.module.css";
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext';
const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const userAuthLinkDisplay = user
        ? <></>
        : <>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Signup</Link></li>
        </>

    const userLogoutButtonDisplay = user
        ? <>
            <li>Hello, {user?.displayName}</li>
            <li className={styles.logout}>
                <button className="btn" onClick={logout}>Logout</button>
            </li>
        </>
        : <></>
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <li className={styles.title}><Link to={"/home"}>Finance Tracker</Link></li>
                {userAuthLinkDisplay}
                {userLogoutButtonDisplay}
            </ul>
        </nav>
    );
};

export default Navbar;
