import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome, faCat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/cats" className={styles.logoLink}>
          <h2>
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className={styles.icon}
            />
            Kithub
          </h2>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          <FontAwesomeIcon icon={faHome} size="lg" />
        </Link>
        <Link to="/cats" className={styles.navLink}>
          <FontAwesomeIcon icon={faCat} size="lg" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
