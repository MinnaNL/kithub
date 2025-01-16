import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS module

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/cats" className={styles.logoLink}>
                <h1>
                        <FontAwesomeIcon icon={faGithub} size="2x" className={styles.icon} />
                        Kithub
                    </h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;