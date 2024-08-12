import "./Foot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

export const Footer = () => {
    return <>
    <footer className="text-center bg-blue py-3">
        <div className="container">
            <p>&copy; 2024 name. All rights reserved.</p>
            <p>Contacts | Customer Review | Privacy Policy | Terms of Service</p>
            <div>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
    </footer>
    </>
}