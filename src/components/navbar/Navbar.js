import React from 'react';
import { Link } from 'react-location';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <li className={styles.title}><Link to={"/home"}>Finance Tracker</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/signup"}>Signup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
