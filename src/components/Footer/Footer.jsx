import lightLogo from '/light.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer>
            <div className="footer">
                <div className="footer__col">
                    <div className="footer__logo">
                    <img src={lightLogo} className="footer__logo" alt="Light logo" />
                    </div>
                    <p className="footer__text">
                        Happy to help
                    </p>
                </div>
                <div className="footer__col">
                    <p className="footer__text">
                        Happy to help
                    </p>
                </div>
                <div className="footer__col">
                    <h4>Our Links</h4>
                    <ul>
                        <li className="footer__link">
                            <Link  to={"/"}>Home</Link>
                        </li>
                        <li className="footer__link">
                        <Link  to={"/about"}>About Us</Link>
                        </li>
                        <li className="footer__link">
                        <Link  to={"/contact"}>Contact</Link>
                        </li>
                        <li className="footer__link">
                        <Link  to={"/register"}>Register</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4 className="item-heading">Subscribe Now</h4>
                    
                </div>
            </div>
            <p className="copyright">
            Copyright © 2023. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer