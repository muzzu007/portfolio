import "../css/Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
    FaGithub,
    FaLinkedin,
    FaBars,
    FaTimes
} from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 40) {

                setScrolled(true);

            } else {

                setScrolled(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav className={scrolled ? "navbar scrolled" : "navbar"}>

            <div className="logo">

                Muzammil<span>.</span>

            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>

                    <Link
                        activeClass="active-link"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenu}
                    >
                        About
                    </Link>

                </li>

                <li>

                    <Link
                        activeClass="active-link"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Skills
                    </Link>

                </li>

                <li>

                    <Link
                        activeClass="active-link"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>

                </li>

                <li>

                    <Link
                        activeClass="active-link"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>

                </li>

                <div className="mobile-icons">

                    <a
                        href="https://github.com/muzzu007"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/orgmuzzu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                </div>

            </ul>

            <div className="nav-icons">

                <a
                    href="https://github.com/muzzu007"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/orgmuzzu"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>

            </div>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </div>

        </nav>

    );

}

export default Navbar;