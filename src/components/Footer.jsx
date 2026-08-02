import "../css/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">


                <p>
                    Python • MERN Stack • Git
                </p>

                

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Me Muzammil.
                        
                    </p>

                    <p>
                        Made with <FaHeart className="heart"/> in India
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;