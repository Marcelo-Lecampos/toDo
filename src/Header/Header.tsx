import React, { ChangeEvent, useState } from "react";
import styles from "./Header.module.css";
import Rocket from "../assets/rocket.png";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <img src={Rocket} alt="Rocket Logo" />
                <span>to</span>
                <span>do</span>
            </div>
        </header>
    );
};

export default Header;
