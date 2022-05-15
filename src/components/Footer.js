import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoFacebook } from 'react-icons/io';


const Footer = () => {
    return (
        <footer>
            <article class="container">
                <a href="/mentions">© 2022 David Maury</a>
                <nav>
                    <a href=""><IoLogoLinkedin /></a>
                    <a href=""><IoLogoGithub /></a>
                    <a href=""><IoLogoFacebook /></a>
                </nav>
            </article>
        </footer>
    );
};

export default Footer;