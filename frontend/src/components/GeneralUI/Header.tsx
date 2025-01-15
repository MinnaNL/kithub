import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS module

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <h1>Kithub</h1>
            </div>
            <nav>
                <Link to="/cats">Cat List</Link>
            </nav>
        </header>
    );
};

export default Header;