import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 My Portfolio. All Rights Reserved.</p>
            <ul>
                <li><a href="https://github.com">GitHub</a></li>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
        </footer>
    );
};

export default Footer;