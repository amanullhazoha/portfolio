import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelect from './languageSelect';
import classes from '../scss/header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const navActive = useRef();

    const handelToggler = () => {
        if (toggle === true) {
            navActive.current.classList.add('navActive');
            setToggle(!toggle);
        } else {
            navActive.current.classList.remove('navActive');
            setToggle(!toggle);
        }
    };

    return (
        <header id={classes.header}>
            <ul className={classes.nav} ref={navActive}>
                <li>
                    <NavLink to="/">
                        <span>Home</span>
                        <i className="fas fa-home" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about">
                        <span>About</span>
                        <i className="fas fa-user" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/portfolio">
                        <span>Portfolio</span>
                        <i className="fas fa-suitcase" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact">
                        <span>Contact</span>
                        <i className="fas fa-envelope-open" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/blog">
                        <span>Blog</span>
                        <i className="fas fa-edit" />
                    </NavLink>
                </li>

                <LanguageSelect />
            </ul>

            <button type="button" className={classes.toggler} onClick={handelToggler}>
                <i className="fab fa-elementor icon" />
            </button>
        </header>
    );
};

export default Header;
